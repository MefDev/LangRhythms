import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
  fullname: yup
    .string()
    .required('fullname is required')
    .max(50, 'Fullname must be at most 50 characters'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special case character'
    ),
})

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special case character'
    ),
})
