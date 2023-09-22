import { render, screen, waitFor } from '@testing-library/react'
import SignInForm from '.'
import { BrowserRouter } from 'react-router-dom'
import user from '@testing-library/user-event'

describe('SignInForm', () => {
  it('renders all form elements', () => {
    render(<SignInForm />, { wrapper: BrowserRouter })
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', { name: 'Login' })

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
  })

  it('it validate inputs', async () => {
    render(<SignInForm />, { wrapper: BrowserRouter })
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', { name: 'Login' })

    //email
    user.type(emailInput, 'invalid-email')
    // password
    user.click(passwordInput)
    user.keyboard('short')
    //submit button
    user.click(loginButton)

    await waitFor(() => {
      expect(screen.getByText(/Must be a valid email/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Password must be at least 6 characters/i)
      ).toBeInTheDocument()
    })
    user.clear(emailInput)
    user.clear(passwordInput)
    user.click(emailInput)
    user.keyboard('zino@gmail.com')
    user.click(passwordInput)
    user.keyboard('ValidPass*3')
    user.click(loginButton)

    await waitFor(() => {
      expect(screen.queryByText('Email is required')).toBeNull()
      expect(screen.queryByText('Password is required')).toBeNull()
      expect(screen.queryByText('Must be a valid email')).toBeNull()
      expect(
        screen.queryByText('Password must be at least 6 characters')
      ).toBeNull()
    })
  })
})
