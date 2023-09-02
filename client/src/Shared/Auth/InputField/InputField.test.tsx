import { render, screen } from '@testing-library/react'
import InputField from '.'


describe('Input Field', () => {
  const mock = jest.fn()
  it('renders the elements', () => {
    render(
      <InputField
        label='email'
        placeholder='email'
        register={mock}
        name='email'
      />
    )
  })

  it('displays label and placeholder', () => {
    render(
      <InputField
        label='email'
        placeholder='email'
        register={mock}
        name='email'
      />
    )
    const label = screen.getByLabelText(/email/i)
    const placeholder = screen.getByPlaceholderText(/email/i)

    expect(label).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
  })

  it('sets input type correctly', () => {
    render(
      <InputField
        label='Password'
        type='password'
        placeholder='password'
        register={mock}
        name='password'
      />
    )
    const passwordInput = screen.getByLabelText(/password/i)
    expect(passwordInput.getAttribute('type')).toBe('password')
  })

  it('displays error message', () => {
    render(
      <InputField
        label='Email'
        placeholder='Enter email'
        register={mock}
        name='email'
        error={{ type: 'email', message: 'Invalid email format' }}
      />
    )
    const errorMsg = screen.getByText('Invalid email format')
    expect(errorMsg).toBeInTheDocument()
  })

  it('does not display error message when no error', () => {
    render(
      <InputField
        label='Email'
        placeholder='Enter email'
        register={mock}
        name='email'
      />
    )
	const errorElement = screen.queryByText(/invalid email/i);
    expect(errorElement).toBeNull();
  })
})
