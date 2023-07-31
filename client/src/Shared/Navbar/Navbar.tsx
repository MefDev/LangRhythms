import { ROUTES } from '@/utils/routes'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='main-nav'>
      <div className='logo'>
        <h2>LangRhythms</h2>
      </div>
      <div className='main-anchors'>
        <ul>
          <li>
            <a className='home' href='#'>
              Home
            </a>
          </li>
          <li>
            <a href='#'>Languages</a>
          </li>
          <li>
            <a href='#'>Testimonials</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
        </ul>
      </div>
      <div className='additional-anchors'>
        <ul>
          <li>
            <a href='#'>Contact Us</a>
          </li>
          <li>|</li>
          <li>
            <Link to={ROUTES.SIGNUP} className='sign-up'>
              sign up
            </Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN} className='sign-in'>
              sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
