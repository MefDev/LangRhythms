import { ReactNode } from 'react'

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
      <div className='flex justify-center items-center col-span-2 py-4 lg:px-0 px-4'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
