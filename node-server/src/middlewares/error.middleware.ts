import { HttpException } from '@/exceptions/HttpException';
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status = error.status || 500;
    const message = error.message || 'Server error occurred';

    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
