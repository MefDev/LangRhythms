import { screen } from '@testing-library/react'
import AuthLayout from '.'
import { renderWithRouter } from '@/utils/Tests/TestUtils'

describe('Auth Layout', () => {
  it('renders without errors', () => {
    renderWithRouter(
      <AuthLayout src='example.jpg'>
        <div>children</div>
      </AuthLayout>
    )
  })

  it('have home link', () => {
    renderWithRouter(
      <AuthLayout src='example.jpg'>
        <div>children</div>
      </AuthLayout>
    )
    const homeLink = screen.getByRole('link')
    expect(homeLink).toHaveAttribute('href', '/')
  })
  it('renders text content', () => {
    renderWithRouter(<AuthLayout src='example.jpg'>Text Content</AuthLayout>)
    const textContent = screen.getByText('Text Content')
    expect(textContent).toBeInTheDocument()
  })

  it('renders another component as child', () => {
    const ChildComponent = () => <div>Child Component</div>
    renderWithRouter(
      <AuthLayout src='example.jpg'>
        <ChildComponent />
      </AuthLayout>
    )
    const childComponent = screen.getByText('Child Component')
    expect(childComponent).toBeInTheDocument()
  })

  it('renders JSX structure', () => {
    renderWithRouter(
      <AuthLayout src='example.jpg'>
        <div>
          <h1>Header</h1>
          <p>Paragraph</p>
        </div>
      </AuthLayout>
    )
    const headerElement = screen.getByText('Header')
    const paragraphElement = screen.getByText('Paragraph')
    expect(headerElement).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
  })
})
