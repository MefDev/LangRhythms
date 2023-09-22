import { screen } from '@testing-library/react'
import NavBar from './Navbar'
import { renderWithRouter } from '@/utils/Tests/TestUtils'

describe('NavBar', () => {
  it('should render the NavBar with the correct logo', () => {
    renderWithRouter(<NavBar />)
    expect(screen.getByText('LangRhythms')).toBeTruthy()
  })

  it('should render the NavBar links', () => {
    renderWithRouter(<NavBar />)
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/blog/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('should render the AuthLinks component when not logged in', () => {
    renderWithRouter(<NavBar />)
    // 2 auth btns for large screen 2 for small screen and the hamburger button
    expect(screen.getAllByRole('button')).toHaveLength(5)
  })
})
