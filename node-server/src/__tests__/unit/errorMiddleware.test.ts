import request from 'supertest';
import express from 'express';
import errorMiddleware from '@/middlewares/error.middleware';
import { HttpException } from '@/exceptions/HttpException';

describe('Error Middleware', () => {
  const app = express();
  const status = 404;
  const message = 'Test error msg';
  const mockNext = jest.fn();
  app.use((req, res, next) => {
    const error = new HttpException(status, message);
    next(error);
  });

  app.use(errorMiddleware);

  it('should return the error message and status code', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe(`HTTP ${status}: ${message}`);
    expect(mockNext).not.toHaveBeenCalled();
  });
  it('should handle default error message and status code', async () => {
	const app = express()
    app.use((req, res, next) => {
      const error = {}
      next(error);
    });

    app.use(errorMiddleware);
    const response = await request(app).get('/');

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Server error occurred');

    expect(mockNext).not.toHaveBeenCalled();
  });
});
