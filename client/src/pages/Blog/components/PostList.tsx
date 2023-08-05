import { Post } from '@/types/Blog.types'
import { urlForImage } from '@/utils/Sanity'
import { formatDate } from '@/utils/Time'
import { ROUTES } from '@/utils/routes'
import { Link } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 gap-10'>
      {posts &&
        posts.map((post) => (
          <Link
            to={`${ROUTES.BLOG}/${post.slug.current}`}
            key={post._id}
            className='bg-light-100 rounded-md shadow-lg hover:scale-105 transition-all duration-150 ease-in-out mx-auto'
          >
            <img
              src={urlForImage(post.mainImage).fit('max').url()}
              className='object-cover rounded-t-md'
            />
            <div className='px-6 pt-3 pb-8'>
              <p className='mb-2'>
                {post.categories?.map((category, index) => (
                  <span
                    key={`${index}-${category}`}
                    className='inline-block bg-primary-100 rounded-md px-3 py-1 text-sm font-semibold text-white'
                  >
                    {category}
                  </span>
                ))}
              </p>
              <h2 className='lg:text-3xl md:text-2xl font-bold mb-2'>
                {post.title}
              </h2>
              <div className='mb-2 flex text-gray-3 text-sm items-center space-x-2'>
                <p>{formatDate(post.publishedAt)}</p>
                <BsDot className='text-xl' />
                <p className='flex items-center'>
                  <span>{post.estimatedReadingTime}</span>
                  <span className='ml-1'>min read</span>
                </p>
              </div>
              <p className='text-base text-gray-2 mb-4'>{post.description}</p>
              <div className='flex items-center space-x-4'>
                <img
                  src={urlForImage(post.authorImage).width(50).fit('max').url()}
                  alt={`Author ${post.authorName}`}
                  className='w-8 h-8 rounded-full'
                />
                <p className='capitalize text-gray-700 font-bold'>
                  {post.authorName}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default PostList
