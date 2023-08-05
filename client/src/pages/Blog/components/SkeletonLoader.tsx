const SkeletonLoader = () => {
  return (
    <div className='grid grid-cols-2 gap-10'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={`${index}-skeleton`}
          className='bg-light-100 rounded-md shadow-lg animate-pulse'
        >
          <div className='h-80 bg-gray-300 rounded-t-md'></div>
          <div className='px-6 py-3'>
            <div className='h-4 w-1/4 bg-gray-300 mb-2'></div>
            <div className='h-4 w-2/4 bg-gray-300 mb-4'></div>
            <div className='flex items-center space-x-4'>
              <div className='h-8 w-8 bg-gray-300 rounded-full'></div>
              <div className='h-4 w-1/4 bg-gray-300'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader
