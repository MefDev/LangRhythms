import { render, screen } from '@testing-library/react'
import ImgLoader from '.'

describe('ImgLoader Component Tests', () => {
  const imageSrc = 'https://placebear.com/g/200/200'
  const altText = 'Test Alt Text'

  it('renders the component with loading spinner initially', () => {
    render(<ImgLoader src={imageSrc} alt={altText} />)

    const loadingSpinner = screen.getByTestId('loading-spinner')
    expect(loadingSpinner).toBeInTheDocument()

    const image = screen.getByAltText(altText)
    expect(image).toHaveClass('opacity-0')

  })

  it('handles missing alt text gracefully', () => {
    render(<ImgLoader src={imageSrc} />)

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', '')
  })

  it('applies custom CSS class', () => {
    render(<ImgLoader src={imageSrc} alt={altText} className='custom-class' />)

    const image = screen.getByAltText(altText)
    expect(image).toHaveClass('custom-class')
  })
})
