import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '@/utils/contants';
import type { AnyZodObject } from 'zod'
import { ZodError } from 'zod'
import { HttpException } from '@/exceptions/HttpException';


export const validate =
  (schema: AnyZodObject) =>
  async (req: Request<unknown>, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      })
      return next()
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map(issue => {
          const fieldName = issue.path.pop();
          return `${fieldName ? fieldName + ': ' : ''}${issue.message}`;
        }).filter(Boolean);
        next(
          new HttpException(
            HTTP_STATUS.BAD_REQUEST,
            `SignUp Validation Error${errorMessages.length > 1 ? 's' : ''}: ${errorMessages.join(', ')}`
          )
        )
      } else {
        next(new HttpException(HTTP_STATUS.BAD_REQUEST , 'Invalid input'))
      }
    }
  }
