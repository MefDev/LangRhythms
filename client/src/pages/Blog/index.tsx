import { useGetPostsQuery } from '@/api/blogApi'
import { urlForImage } from '@/utils/Sanity'
import { formatDate } from '@/utils/Time'
import { ROUTES } from '@/utils/routes'
import { Link } from 'react-router-dom'

const Blog = () => {
  const { data: posts, isError, isLoading } = useGetPostsQuery()

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Loading...
      </div>
    )
  }

  if (isError) {
    return (
      <div className='flex justify-center items-center h-screen text-red-500'>
        Error!
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-6 flex items-center justify-center'>
      {posts &&
        posts.map((post) => (
          <Link
            to={`${ROUTES.BLOG}/${post.slug.current}`}
            key={post._id}
            className='mb-8 bg-white rounded shadow-md p-4 max-w-md mx-auto'
          >
            <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
            <img
              src={urlForImage(post.mainImage).fit('max').url()}
              className='object-cover rounded'
            />
            <p className='mt-2'>
              {post.categories?.map((category, index) => (
                <span
                  key={`${index}-${category}`}
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
                >
                  {category}
                </span>
              ))}
            </p>
            <p className='mt-2 text-gray-600'>{formatDate(post.publishedAt)}</p>
            <p className='mt-2 text-gray-600 flex items-center'>
              <span>{post.estimatedReadingTime}</span>
              <span className='ml-1'>min</span>
            </p>
            <p className='mt-2 text-gray-800'>{post.description}</p>
            <p className='mt-4 text-gray-500'>{post.authorName}</p>
          </Link>
        ))}
    </div>
  )
}

export default Blog
