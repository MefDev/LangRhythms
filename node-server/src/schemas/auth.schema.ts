import { z } from 'zod';

export const SignupSchema = z.object({
  body: z.object({
    email: z.string().email(),
    fullName: z
      .string()
      .min(3, { message: 'FullName must be at least 3 characters long' })
      .max(20, { message: 'fullName can\'t be more than 20 characters long' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
      })
      .regex(/\d/, { message: 'Password must contain at least one digit' })
      .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/, {
        message: 'Password must contain at least one special character',
      }),
  }),
});
export type SignupSchema = z.infer<typeof SignupSchema>['body'];
