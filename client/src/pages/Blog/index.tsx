import { useState, useEffect, FC } from 'react'
import { useGetPaginatedPostsQuery, useGetTotalPostsQuery } from '@/api/blogApi'
import SectionTitle from '../Home/components/SectionTitle'
import PostList from './components/PostList'
import { NewsLetter } from './components/NewsLetter'
import Search from './components/Search'
import SkeletonLoader from './components/SkeletonLoader'
import ErrorState from './components/ErrorState'
import { filterPosts } from '@/utils/Search'
import PostNotFound from './components/PostNotFound'
import Pagination from '@/Shared/Pagination'
import { itemSlideUp, listAnimation } from '@/utils/Animation'
import { motion } from 'framer-motion'
import { ReactComponent as Pattern_1 } from '@/assets/patterns/blog-pattern1.svg'
import { ReactComponent as Pattern_2 } from '@/assets/patterns/blog-pattern2.svg'

const Blog: FC = () => {
  const { data: totalPosts } = useGetTotalPostsQuery()
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 4

  const {
    data: posts,
    isError,
    isLoading,
  } = useGetPaginatedPostsQuery({
    page: currentPage,
    perPage: postsPerPage,
  })

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 200,
      left: 0,
      behavior: 'smooth',
    })
  }, [currentPage])

  const filteredPosts = filterPosts(posts, searchTerm)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <section className='py-32 mb-20 mx-auto max-w-screen-xl xl:px-0 px-4'>
        <Pattern_1 className='absolute top-20 md:opacity-100 opacity-30 sm:flex hidden -right-10'/>
        <Pattern_2 className='absolute top-32 left-10'/>
        <SectionTitle
          h3Text='blog'
          h2Text='Get To know more about the cultures and traditions'
        />
        <motion.div
          initial='hidden'
          whileInView='visible'
          custom={0.2}
          variants={listAnimation}
          viewport={{ once: true }}
          className='text-center max-w-md mx-auto -mt-12 mb-20'
        >
          <motion.p
            variants={itemSlideUp}
            className='text-gray-500 font-semibold text-sm mb-6'
          >
            delve into the rich tapestry of Moroccan culture, exploring its
            languages, art, cuisine, history, and traditions.
          </motion.p>
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </motion.div>
        {isLoading && !isError && <SkeletonLoader/>}
        {!isLoading && isError && <ErrorState/>}
        {filteredPosts && filteredPosts.length > 0 ? (
          <PostList posts={filteredPosts} />
        ) : (
          <PostNotFound />
        )}
        <div className='relative py-20'>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((totalPosts || postsPerPage) / postsPerPage)}
          onPageChange={handlePageChange}
        />
        </div>
      </section>
      <NewsLetter />
    </>
  )
}

export default Blog
