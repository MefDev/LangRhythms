import { useState, FC } from 'react'
import { useGetPostsQuery } from '@/api/blogApi'
import SectionTitle from '../Home/components/SectionTitle'
import PostList from './components/PostList'
import { NewsLetter } from './components/NewsLetter'
import Search from './components/Search'
import SkeletonLoader from './components/SkeletonLoader'
import ErrorState from './components/ErrorState'
import { filterPosts } from '@/utils/Search'
import PostNotFound from './components/PostNotFound'

const Blog: FC = () => {
  const { data: posts, isError, isLoading } = useGetPostsQuery()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = filterPosts(posts, searchTerm)

  return (
    <>
      <section className='py-20 mx-auto max-w-screen-xl xl:px-0 px-4'>
        <SectionTitle
          h3Text='blog'
          h2Text='Get To know more about the cultures and traditions'
        />
        <div className='text-center max-w-md mx-auto -mt-12 mb-20'>
          <p className='text-gray-500 font-semibold text-sm mb-6'>
            delve into the rich tapestry of Moroccan culture, exploring its
            languages, art, cuisine, history, and traditions.
          </p>
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </div>
        {isLoading && <SkeletonLoader />}
        {!isLoading && isError && <ErrorState />}
        {filteredPosts && filteredPosts.length > 0 ? (
          <PostList posts={filteredPosts} />
        ) : (
          <PostNotFound />
        )}
      </section>
      <NewsLetter />
    </>
  )
}

export default Blog
