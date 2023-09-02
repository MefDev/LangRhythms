import React from 'react'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@/utils/FormValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/utils/routes'
import InputField from '@/Shared/Auth/InputField'

type Inputs = {
  email: string
  password: string
}

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(signInSchema) })

  const onSubmit = (data: Inputs) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl w-full'>
      <h1 className='text-4xl text-center font-raleway mb-8 font-bold capitalize'>
        Login to Your Account
      </h1>

      <InputField
        label='Email'
        placeholder='ex: zino@yoruzuya-gin-chan.com'
        register={register}
        name='email'
        error={errors.email}
      />

      <InputField
        label='Password'
        placeholder='Enter your password'
        register={register}
        error={errors.password}
        type='password'
        name='password'
      />

      <div className='text-center mt-12 mb-6'>
        <button className='rounded-full bg-primary-200 hover:bg-primary-200/90 text-gray-900 uppercase px-12 py-2.5 font-open-sans font-bold'>
          Login
        </button>
      </div>
      <p className='font-semibold font-open-sans text-gray-700 mb-10'>
        Don't have an account?
        <Link
          to={ROUTES.SIGNUP}
          className='text-secondary-300 hover:text-secondary-300/80 ml-1'
        >
          Create account
        </Link>
      </p>
      <div className='text-center'>
        <p className='w-100 text-center my-2'>— OR —</p>
        <button
          type='button'
          className='text-gray-600 bg-gray-200 hover:bg-gray-200/90 rounded-full text-sm px-6 py-3 text-center inline-flex items-center font-semibold'
        >
          <FcGoogle className='mr-2' />
          Sign in with Google
        </button>
      </div>
    </form>
  )
}

export default SignInForm
