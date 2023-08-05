import React from 'react'

const PostSkeletonLoader = () => {
  return (
    <section className='mb-20 py-20 mx-auto max-w-screen-md xl:px-0 px-4'>
      <div className='mb-8 flex items-center space-x-1'>
        <div className='w-6 h-6 bg-gray-300 animate-pulse'></div>
        <div className='w-16 h-4 bg-gray-300 animate-pulse'></div>
      </div>
      <div className='mb-2'>
        <div className='w-16 h-6 bg-gray-300 animate-pulse'></div>
      </div>
      <div className='mb-4'>
        <div className='w-1/2 h-8 bg-gray-300 animate-pulse'></div>
      </div>
      <div className='mb-4'>
        <div className='w-1/3 h-6 bg-gray-300 animate-pulse'></div>
      </div>
      <div className='mb-8'>
        <div className='w-full h-64 bg-gray-300 animate-pulse'></div>
      </div>
      <div className='post-body mt-4 mb-20 text-gray-800'>
        <div className='w-full h-6 bg-gray-300 animate-pulse mb-2'></div>
        <div className='my-4 w-full h-6 bg-gray-300 animate-pulse'></div>
        <div className='w-full h-6 bg-gray-300 animate-pulse mb-2'></div>
        <div className='w-full my-4 h-6 bg-gray-300 animate-pulse'></div>
        <div className='w-full h-6 bg-gray-300 animate-pulse mb-2'></div>
        <div className='w-full h-6 bg-gray-300 animate-pulse'></div>
      </div>
      <div>
        <div className='sm:p-6 p-4 bg-gray-200/40 border border-gray-200 md:gap-10 grid md:grid-cols-7 grid-cols-1 items-center'>
          <div className='rounded-full w-24 h-24 mx-auto md:mb-0 mb-4'>
            <div className='w-full h-full bg-gray-300 animate-pulse rounded-full'></div>
          </div>
          <div className='col-span-6 text-gray-2 md:text-left text-center'>
            <h4 className='text-xl font-bold mb-2'>
              <div className='w-1/3 h-6 bg-gray-300 animate-pulse'></div>
            </h4>
            <div className='text-sm leading-relaxed'>
              <div className='w-full h-6 bg-gray-300 animate-pulse mb-2'></div>
              <div className='w-full h-6 bg-gray-300 animate-pulse'></div>
              <div className='w-4/5 h-6 bg-gray-300 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 font-bold flex items-center space-x-4'>
        <div className='w-6 h-6 bg-gray-300 animate-pulse'></div>
        <div className='w-16 h-4 bg-gray-300 animate-pulse'></div>
      </div>
    </section>
  )
}

export default PostSkeletonLoader
