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
    <div className='grid lg:grid-cols-3 items-center justify-between h-[100vh]'>
      <div className='relative w-full h-full'>
        <div
          className='w-full 2xl:bg-contain bg-cover lg:flex hidden bg-no-repeat absolute h-full top-0 bottom-0 lg:bg-left bg-center'
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
      <div className='relative flex justify-center items-center col-span-2 py-4 lg:px-0 px-4'>
        <Link
          to={ROUTES.HOME}
          className='absolute -top-2 left-0 flex px-4 items-center space-x-2'
        >
          <LuChevronsLeft />
          <span className='font-bold'>Home</span>
        </Link>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
