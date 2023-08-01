import React from 'react'
import { useForm } from 'react-hook-form'
import { signUpSchema } from '@/utils/formValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/utils/routes'
import InputField from '@/Shared/Auth/InputField'


type Inputs = {
  fullname: string
  email: string
  password: string
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(signUpSchema) })

  const onSubmit = (data: Inputs) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl w-full'>
      <h1 className='text-4xl text-center font-raleway mb-8 font-bold capitalize'>
        Create your free account
      </h1>

       <InputField
        label="FullName"
        placeholder="Enter your fullname"
        register={register}
		name='fullname'
        error={errors.fullname}
      />

      <InputField
        label="Email"
        placeholder="ex: zino@yoruzuya-gin-chan.com"
        register={register}
		name='email'
        error={errors.email}
      />

      <InputField
        label="Password"
        placeholder="Enter your password"
        register={register}
        error={errors.password}
        type="password"
		name='password'
      />

      <div className='text-center mb-6 mt-10'>
        <button className='rounded-full bg-primary-100 hover:bg-primary-100/90 text-white uppercase px-8 py-3 font-open-sans font-bold'>
          create account
        </button>
      </div>
      <p className='font-semibold font-open-sans text-gray-700 mb-10'>
        Already have a account?
        <Link to={ROUTES.SIGNIN} className='text-secondary-100 hover:text-secondary-100/80 ml-1'>SignIn</Link>
      </p>
      <div className='text-center'>
        <p className='w-100 text-center my-2'>— OR —</p>
        <button
          type='button'
          className='text-gray-600 bg-gray-200 hover:bg-gray-200/90 rounded-full text-sm px-6 py-3 text-center inline-flex items-center font-semibold'
        >
          <FcGoogle className='mr-2' />
          Sign up with Google
        </button>
      </div>
    </form>
  )
}

export default SignUpForm
