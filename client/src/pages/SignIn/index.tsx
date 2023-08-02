import AuthLayout from '@/Shared/Auth/AuthLayout'
import signInImg from '@/assets/sign-in-img.jpg'
import SignInForm from './components/SignInForm'
import pattern from '@/assets/patterns/sign-in-pattern.svg'

const SignIn = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute -bottom-20 -right-10'>
        <img src={pattern} alt='zellige pattern' />
      </div>
      <AuthLayout src={signInImg}>
        <SignInForm />
      </AuthLayout>
    </section>
  )
}

export default SignIn
