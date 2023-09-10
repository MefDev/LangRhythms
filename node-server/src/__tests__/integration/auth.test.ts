import App from '@/app';
import AuthController from '@/controllers/auth.controller';
import UserRepository from '@/data/repositories/userRepo';
import prisma from '@/db';
import AuthRoute from '@/routes/auth.route';
import { API_ROUTES, HTTP_STATUS } from '@/utils/contants';
import request from 'supertest';
import jwt from 'jsonwebtoken';

describe(API_ROUTES.AUTH, function () {
  const signUpRoute = `${API_ROUTES.API_PREFIX}${API_ROUTES.AUTH}/${API_ROUTES.SIGN_UP}`;
  const appInstance = new App([
    new AuthRoute(new AuthController(new UserRepository())),
  ]);
  it('should respond with a `200` status code and user details', async () => {
    const res = await request(appInstance.app).post(signUpRoute).send({
      email: 'zino@gmail.com',
      fullName: 'Zino',
      password: 'StrongPass123!',
    });
    const newUser = await prisma.user.findFirst();

    expect(res.status).toBe(HTTP_STATUS.CREATED);
    expect(newUser).not.toBeNull();
    expect(res.body.data.newUser).toStrictEqual({
      fullName: 'Zino',
      id: newUser?.id,
      email: newUser?.email,
      role: newUser?.role,
    });
  });

  it('should respond with a valid session token when successful', async () => {
    const { body } = await request(appInstance.app).post(signUpRoute).send({
      email: 'zino@gmail.com',
      fullName: 'Zino',
      password: 'StrongPass123!',
    });
    expect(body.data).toHaveProperty('token');
    expect(jwt.verify(body.data.token, process.env.JWT_SECRET as string));
  });
  it('should respond with a `400` status code if a user exists with the provided email', async () => {
    await prisma.user.create({
      data: {
        email: 'zino@gmail.com',
        fullName: 'Zino',
        password: 'StrongPass!23!',
      },
    });
    const { status, body } = await request(appInstance.app)
      .post(signUpRoute)
      .send({
        email: 'zino@gmail.com',
        fullName: 'Zino',
        password: 'StrongPass!23!',
      });
    const count = await prisma.user.count();
    expect(status).toBe(HTTP_STATUS.CONFLICT);
    expect(count).toBe(1);
    expect(body.message).toBe('HTTP 409: User with this email already exists.');
  });
  it('should respond with a `400` status code if an invalid request body is provided', async () => {
    const { status, body } = await request(appInstance.app)
      .post(signUpRoute)
      .send({
        fullName: '',
        password: 'weak',
      });
    expect(status).toBe(HTTP_STATUS.BAD_REQUEST);
    expect(body.message).toBe(
      'HTTP 400: SignUp Validation Errors: email: Required, fullName: FullName must be at least 3 characters long, password: Password must be at least 8 characters long, password: Password must contain at least one uppercase letter, password: Password must contain at least one digit, password: Password must contain at least one special character',
    );
  });
});
