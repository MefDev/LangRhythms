import ImgLoader from '@/Shared/ImageLoader'
import { ROUTES } from '@/utils/routes'
import { ReactNode } from 'react'
import { LuChevronsLeft } from 'react-icons/lu'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
  src: string
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ src, children }) => {
  return (
    <div className='grid lg:grid-cols-3 items-center justify-between h-[100vh] relative'>
      <div className="absolute top-0 left-0 right-0 bottom-0 lg:grid lg:grid-cols-3">
        <Link
        role='link'
          to={ROUTES.HOME}
          className='col-start-2 absolute top-0 flex px-4 items-center space-x-2 mt-4'
        >
          <LuChevronsLeft />
          <span className='font-bold'>Home</span>
        </Link>
      </div>
      <div className='relative w-full h-full'>
        <div
          className='w-full 2xl:bg-contain  lg:flex hidden bg-no-repeat relative h-full top-0 bottom-0 lg:bg-left bg-center'
        >
          <ImgLoader src={src} alt='auth-img' className='w-full h-full'/>
          </div>
      </div>
      <div className='relative flex justify-center items-center col-span-2 lg:py-4 py-16 lg:px-0 px-4 '>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
