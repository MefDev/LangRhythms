import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1)
  }

  const handleNextClick = () => {
    onPageChange(currentPage + 1)
  }

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }
  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    )

    return pageNumbers.map((page) => (
      <button
        key={page}
        className={`mx-2 w-8 h-8 flex items-center justify-center rounded-full ${
          currentPage === page
            ? 'bg-secondary-100 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </button>
    ))
  }

  return (
    <div className='flex justify-center mt-8 absolute -bottom-10 left-1/2 -translate-x-1/2'>
      <button
        disabled={currentPage <= 1}
        className='mx-2 p-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed'
        onClick={handlePrevClick}
      >
        <LuChevronLeft className='text-2xl' />
      </button>
      {renderPageNumbers()}
      <button
        disabled={currentPage >= totalPages}
        className='mx-2 p-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed '
        onClick={handleNextClick}
      >
        <LuChevronRight className='text-2xl' />
      </button>
    </div>
  )
}

export default Pagination
