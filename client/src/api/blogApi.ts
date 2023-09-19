import sanityClient from '@/services/client'
import { Post } from '@/types/Blog.types'
import { createApi } from '@reduxjs/toolkit/query/react'

const sanityBaseQuery = async ({ query }: { query: string }) => {
  try {
    const data = await sanityClient.fetch(query)
    return { data }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: sanityBaseQuery,
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPost: builder.query<Post, string>({
      query: (slug) => ({
        query: `
        *[_type == "post" && slug.current == "${slug}"]{
        _id,
        title,
        slug,
        mainImage,
        body,
        "authorName": author->name,
        "authorImage": author->image,
        "authorBio": author->bio,
        "categories": categories[]->title,
        "relatedPosts": relatedPosts[]->{
          slug,
          _id,
          title,
          mainImage,
          description
        },
        publishedAt,
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
      }[0]`,
      }),
      providesTags: (result, error, _id) => [{ type: 'Posts', _id }],
    }),
    getPaginatedPosts: builder.query<Post[], { page: number; perPage: number }>(
      {
        query: ({ page, perPage }) => ({
          query: `
          *[_type == "post"] | order(publishedAt desc) [${
            (page - 1) * perPage
          }...${page * perPage}]
          {
            _id,
            title,
            slug,
            mainImage,
            description,
            "authorName": author->name,
            "authorImage": author->image,
            "categories": categories[]->title,
            publishedAt,
            "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
          }
        `,
        }),
        providesTags: (result, error, { page }) => [
          { type: 'Posts', page },
          { type: 'Posts', _id: 'LIST' },
        ],
      }
    ),
    getTotalPosts: builder.query<number, void>({
      query: () => ({
        query: `count(*[_type == "post"])`,
      }),
    }),
  }),
})

export const {
  useGetPostQuery,
  useGetPaginatedPostsQuery,
  useGetTotalPostsQuery,
} = blogApi
