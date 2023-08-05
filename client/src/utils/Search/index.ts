import { Post } from '@/types/Blog.types'

export const filterPosts = (posts: Post[] | undefined, searchTerm: string) =>
  posts?.filter((post) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    const postTitle = post.title.toLowerCase()
    const authorName = post.authorName.toLowerCase()
    const categories =
      post.categories?.map((category) => category.toLowerCase()) || []

    return (
      postTitle.includes(lowerCaseSearchTerm) ||
      authorName.includes(lowerCaseSearchTerm) ||
      categories.some((category) => category.includes(lowerCaseSearchTerm))
    )
  })
