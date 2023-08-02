import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const aboutLinks = [
  { name: 'How it works', path: '#' },
  { name: 'Features', path: '#' },
  { name: 'Testimonials', path: '#' },
]

const communityLinks = [
  { name: 'Events', path: '#' },
  { name: 'Blog', path: '#' },
]

const socialMediaLinks = [
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/your_facebook_handle',
    icon: <FaFacebookF className='text-white' />,
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/your_twitter_handle',
    icon: <FaTwitter className='text-white' />,
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/your_instagram_handle',
    icon: <FaInstagram className='text-white' />,
  },
]

const Footer = () => (
  <footer className='px-4 pt-20 bg-primary-100 text-white md:text-left text-center'>
    <div className='max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8'>
      <div className='flex flex-col md:flex-row items-center justify-between mb-20'>
        <div className='space-y-6 mb-10 md:mb-0'>
          <h1 className='mb-2 text-3xl font-bold'>LangRythms</h1>
          <p className='text-sm'>
            Our vision is to help you reach fluency <br /> in your language of
            choice
          </p>
          <div className='flex space-x-3 md:justify-start justify-center'>
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center text-sm w-8 h-8 rounded-full bg-primary-200 hover:bg-primary-200//90 shadow-lg'
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:justify-between'>
          <div className='px-6'>
            <h3 className='text-lg font-bold mb-6'>About</h3>
            <ul className='space-y-4 lg:col-span-2 xl:col-span-2'>
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className='text-base text-white hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='px-6'>
            <h3 className='text-lg font-bold mb-6'>Community</h3>
            <ul className='space-y-4 lg:col-span-2 xl:col-span-2'>
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className='text-base text-white hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='px-6'>
            <h3 className='text-lg font-bold mb-6'>Social media</h3>
            <ul className='space-y-4 lg:col-span-2 xl:col-span-2'>
              {socialMediaLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className='text-base text-white hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-white/30 h-[1px] w-full' />
      <div className='flex flex-col sm:flex-row justify-between items-center text-xs text-white font-sm py-8'>
        <p>©2023. LangRythms All rights reserved</p>
        <div className='flex space-x-4 mt-4 sm:mt-0'>
          <a href='#'>Privacy & Policy</a>
          <a href='#'>Terms & Condition</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
