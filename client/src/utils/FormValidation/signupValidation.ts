import * as yup from 'yup'

const signUpSchema = yup.object().shape({
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
      'Password should include at least one uppercase and lowercase letter, a number, and a special character (e.g., *, !, #)'
    ),
})

export default signUpSchema
