import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default Layout
