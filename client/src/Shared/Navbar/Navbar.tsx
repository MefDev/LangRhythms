import { useState } from 'react'
import { ROUTES } from '@/utils/routes'
import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'

type Route = {
  name: string
  path: string
}

const routes: Route[] = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'About', path: ROUTES.ABOUT },
  { name: 'Blog', path: ROUTES.BLOG },
  { name: 'Contact', path: ROUTES.CONTACT },
]

const AuthLinks = () => {
  return (
    <div className='flex md:space-x-3 md:flex-row flex-col space-y-4 md:space-y-0 space-x-0'>
      <Link to={ROUTES.SIGNUP}>
        <button className='font-bold text-gray-700 hover:bg-primary-200/90 rounded-lg border-2 hover:shadow-primary-200 hover:shadow-md border-primary-200 text-sm px-4 py-2 text-center w-full md:w-auto'>
          Sign up
        </button>
      </Link>
      <Link to={ROUTES.SIGNIN}>
        <button className='text-gray-700 border-2 border-primary-200 hover:bg-primary-200/90 hover:shadow-primary-200 hover:shadow-md bg-primary-200 font-bold rounded-lg text-sm px-4 py-2 text-center md:w-auto w-full'>
          Sign in
        </button>
      </Link>
    </div>
  )
}

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='relative'>
      <div className='border-b border-b-gray-200 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to={ROUTES.HOME}>
          <h2 className='text-2xl font-bold text-primary-100'>LangRhythms</h2>
        </Link>
        <div className='md:hidden'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          className={`md:static md:w-auto w-full absolute top-full bg-white left-0 z-20 overflow-hidden transition-all ease-in-out duration-300 linear-100 ${
            isOpen ? 'max-h-96' : 'md:max-h-full max-h-0'
          } md:flex md:w-auto`}
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 '>
            {routes.map((route: Route) => (
              <li key={route.name}>
                <Link
                  onClick={() => setOpen(false)}
                  to={route.path}
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-100 font-medium md:p-0'
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='md:hidden p-4'>
            <AuthLinks />
          </div>
        </div>
        <div className='md:flex hidden'>
          <AuthLinks />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
