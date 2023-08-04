import { useGetPostQuery } from '@/api/blogApi'
import { useParams } from 'react-router-dom'
import { urlForImage } from '@/utils/Sanity'
import { formatDate } from '@/utils/Time'
import { PortableText } from '@portabletext/react'
import './styles.css'

const Post = () => {
  const { slug } = useParams()
  const { data: post, isError, isLoading } = useGetPostQuery(slug || '')
  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Loading...
      </div>
    )
  }

  if (isError || !post) {
    return (
      <div className='flex justify-center items-center h-screen text-red-500'>
        Error!
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
      <img
        src={urlForImage(post.mainImage).url()}
        alt='post'
        className='object-cover w-full h-64 rounded mb-4'
      />
      <div className='mb-4'>
        {post.categories?.map((category, index) => (
          <span
            key={`${index}-${category}`}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
          >
            {category}
          </span>
        ))}
      </div>

      <p className='text-gray-600'>{formatDate(post.publishedAt)}</p>
      <div className='flex items-center mt-2 mb-4'>
        <span className='mr-2'>{post.estimatedReadingTime}</span>
        <span className='text-gray-600'>min read</span>
      </div>
      <div className='post-body mt-4 mb-8 text-gray-800'>
        <PortableText value={post.body} />
      </div>
      <p className='text-xl font-semibold mb-2'>Written by {post.authorName}</p>
      <div className='flex items-center mb-4'>
        <img
          src={urlForImage(post.authorImage).width(50).url()}
          alt='author'
          className='mr-4 rounded-full w-12 h-12 object-cover'
        />

        <PortableText value={post.authorBio} />
      </div>
    </div>
  )
}

export default Post
