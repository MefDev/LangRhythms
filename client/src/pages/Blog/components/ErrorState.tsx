const ErrorState = () => {
  return (
    <div className='text-center max-w-md mx-auto -mt-12 mb-20'>
      <div className='text-center'>
        <h2 className='text-red-600 text-4xl font-bold mb-4'>
          Oops! Something went wrong.
        </h2>
        <p className='text-gray-600 mb-8'>
          We apologize, but there was an error fetching the data. Please try
          again later.
        </p>
      </div>
    </div>
  )
}

export default ErrorState
