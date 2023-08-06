import { useGetPostQuery } from '@/api/blogApi'
import { Link, useParams } from 'react-router-dom'
import { urlForImage } from '@/utils/Sanity'
import { formatDate } from '@/utils/Time'
import { PortableText } from '@portabletext/react'
import './styles.css'
import { ROUTES } from '@/utils/routes'
import { LuChevronsLeft } from 'react-icons/lu'
import PostSkeletonLoader from './components/PostSkeletonLoader'
import ErrorState from './components/ErrorState'

const Post = () => {
  const { slug } = useParams()
  const { data: post, isError, isLoading } = useGetPostQuery(slug || '')
  if (isLoading) {
    return <PostSkeletonLoader />
  }

  if (isError || !post) {
    return <ErrorState />
  }

  return (
    <section className='mb-20 py-20 mx-auto max-w-screen-md xl:px-0 px-4'>
      <Link
        to={ROUTES.BLOG}
        className='mb-8 font-bold flex items-center space-x-1'
      >
        <LuChevronsLeft />
        <span>Back</span>
      </Link>
      <div className='mb-2'>
        {post.categories?.map((category, index) => (
          <span
            key={`${index}-${category}`}
            className='inline-block bg-primary-100 rounded-md px-3 py-1 text-sm font-semibold text-white'
          >
            {category}
          </span>
        ))}
      </div>
      <h1 className='md:text-header text-3xl font-bold mb-4'>{post.title}</h1>
      <div className='flex items-center space-x-2 mb-4'>
        <p className='text-gray-600'>{formatDate(post.publishedAt)}</p>
        <div className='flex items-center'>
          <span className='mr-2'>{post.estimatedReadingTime}</span>
          <span className='text-gray-600'>min read</span>
        </div>
      </div>
      <img
        src={urlForImage(post.mainImage).url()}
        alt='post'
        className='object-cover w-full rounded mb-8'
      />
      <div className='post-body mt-4 mb-20 text-gray-800'>
        <PortableText value={post.body} />
      </div>
      <div>
        <div className='mb-10'>
          {post.relatedPosts && (
            <>
              <h3 className='text-2xl font-bold mb-4'>Keep reading</h3>
              <div className='grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5 items-start'>
                {post.relatedPosts.map((post) => (
                  <Link
                    to={`${ROUTES.BLOG}/${post.slug.current}`}
                    key={post._id}
                    className='grid md:grid-cols-5 gap-4 grid-cols-1 items-center md:space-x-4'
                  >
                    <div className='col-span-2 md:h-auto'>
                      <img
                        className='w-full h-full rounded'
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                      />
                    </div>
                    <div className='col-span-3'>
                      <h4 className='font-bold text-xl mb-4'>{post.title}</h4>
                      <p className='leading-relaxed text-sm text-gray-3'>
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <div className='sm:p-6 p-4 bg-light-100/40 border border-gray-200 md:gap-10 grid md:grid-cols-7 grid-cols-1 items-center'>
          <div className='rounded-full w-24 h-24 mx-auto md:mb-0 mb-4'>
            <img
              src={urlForImage(post.authorImage).fit('max').url()}
              alt='author'
              className='object-cover rounded-full w-full h-full'
            />
          </div>
          <div className='col-span-6 text-gray-2 md:text-left text-center'>
            <h4 className='text-xl font-bold mb-2'>
              Written by {post.authorName}
            </h4>
            <div className='text-sm leading-relaxed'>
              <PortableText value={post.authorBio} />
            </div>
          </div>
        </div>
      </div>
      <Link
        to={ROUTES.BLOG}
        className='mt-8 font-bold flex items-center space-x-4'
      >
        <LuChevronsLeft />
        <span>Back</span>
      </Link>
    </section>
  )
}

export default Post
