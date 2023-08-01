import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer'

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
