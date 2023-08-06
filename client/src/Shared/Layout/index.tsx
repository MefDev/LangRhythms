import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer'

const Layout = () => {
  return (
    <main>
      <NavBar />
      <div className='overflow-x-hidden relative'>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default Layout
