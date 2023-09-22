import { useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

type Props = {
  src: string
  alt?: string
  className?: string
}

const ImgLoader = ({ src, alt, className }: Props) => {
  const [loaded, setLoaded] = useState(false)

  const onLoad = () => setLoaded(true)

  return (
    <div>
      {!loaded && (
        <div
          data-testid='loading-spinner'
          className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center'
        >
          <AiOutlineLoading className='text-5xl animate-spin fill-primary-100' />
        </div>
      )}

      <img
        alt={alt || ''}
        className={`transition-opacity ${
          !loaded ? 'opacity-0' : 'opacity-100'
        } ${className || ''}`}
        onLoad={onLoad}
        src={src}
      />
    </div>
  )
}

export default ImgLoader
