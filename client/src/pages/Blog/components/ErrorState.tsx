import { ROUTES } from '@/utils/routes'
import { Link } from 'react-router-dom'

const ErrorState = () => {
  return (
    <div className='text-center max-w-md mx-auto mb-20 py-10'>
      <div className='text-center'>
        <h2 className='text-red-600 text-4xl font-bold mb-4'>
          Oops! Something went wrong.
        </h2>
        <p className='text-gray-600 mb-8'>
          We apologize, but there was an error fetching the data. Please try
          again later.
        </p>
        <Link
          className='font-semibold px-4 py-2 rounded bg-primary-200 '
          to={ROUTES.HOME}
        >
          Back Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorState
