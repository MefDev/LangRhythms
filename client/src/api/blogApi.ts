/* eslint-disable @typescript-eslint/no-unused-vars */
import sanityClient from '@/services/client'
import { Post } from '@/types/Blog.types'
import { createApi  } from '@reduxjs/toolkit/query/react'

const sanityBaseQuery = async ({ query }: { query: string }) => {
  try {
    const data = await sanityClient.fetch(query);
    return { data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: sanityBaseQuery,
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        query: `
          *[_type == "post"]{
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
        }`,
      }),
      providesTags: (result, error) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Posts' as const, _id })),
              { type: 'Posts', _id: 'LIST' },
            ]
          : [],
    }),
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
        publishedAt,
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
      }[0]`,
      }),
      providesTags: (result, error, _id) => [{ type: 'Posts', _id }],
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery } = blogApi
