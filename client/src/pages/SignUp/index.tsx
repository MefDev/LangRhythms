import AuthLayout from '@/Shared/Auth/AuthLayout'
import signUpImg from '@/assets/sign-up-img.jpg'
import SignUpForm from './components/SignUpForm'
import pattern from '@/assets/patterns/sign-up-pattern.svg'

const SignUp = () => {
  return (
    <section className='relative'>
      <div className='absolute top-0 right-0'>
        <img src={pattern} alt='zellige pattern' />
      </div>
      <AuthLayout src={signUpImg}>
        <SignUpForm />
      </AuthLayout>
    </section>
  )
}

export default SignUp
