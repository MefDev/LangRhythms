import App from '@/app';
import AuthController from '@/controllers/auth.controller';
import UserRepository from '@/data/repositories/userRepo';
import prisma from '@/db';
import AuthRoute from '@/routes/auth.route';
import { API_ROUTES, HTTP_STATUS } from '@/utils/contants';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { hashSync } from 'bcrypt';

describe(API_ROUTES.AUTH, function () {
  const appInstance = new App([
    new AuthRoute(new AuthController(new UserRepository())),
  ]);
  describe(`[POST] /${API_ROUTES.SIGN_UP}`, () => {
    const signUpRoute = `${API_ROUTES.API_PREFIX}${API_ROUTES.AUTH}/${API_ROUTES.SIGN_UP}`;
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
      expect(body.message).toBe(
        'HTTP 409: User with this email already exists.',
      );
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
        'HTTP 400: Auth Validation Errors: email: Required, fullName: FullName must be at least 3 characters long, password: Password must be at least 8 characters long, password: Password must contain at least one uppercase letter, password: Password must contain at least one digit, password: Password must contain at least one special character',
      );
    });
  });

  describe(`[POST] /${API_ROUTES.SIGN_IN}`, () => {
    const signInRoute = `${API_ROUTES.API_PREFIX}${API_ROUTES.AUTH}/${API_ROUTES.SIGN_IN}`;
    const testUser = {
      password: 'StrongPass123!',
      email: 'zino@gmail.com',
    };
    beforeEach(async () => {
      await prisma.user.create({
        data: {
          fullName: 'zino',
          password: hashSync('StrongPass123!', 10),
          email: 'zino@gmail.com',
        },
      });
    });

    it('should respond with a `200` status code when provided valid credentials', async () => {
      const { status } = await request(appInstance.app)
        .post(signInRoute)
        .send(testUser);
      expect(status).toBe(HTTP_STATUS.ACCEPTED);
    });

    it('should respond with the user details when successful', async () => {
      const { body } = await request(appInstance.app)
        .post(signInRoute)
        .send(testUser);
      const keys = Object.keys(body.data.user);
      expect(keys.length).toBe(4);
      expect(keys).toStrictEqual(['id', 'email', 'fullName', 'role']);
      expect(body.data.user.fullName).toBe('zino');
    });

    it('should respond with a valid session token when successful', async () => {
      const { body } = await request(appInstance.app)
        .post(signInRoute)
        .send(testUser);
      expect(body.data).toHaveProperty('token');
      expect(jwt.verify(body.data.token, process.env.JWT_SECRET as string));
    });

    it('should respond with a `400` status code when given invalid credentials', async () => {
      const { body, status } = await request(appInstance.app)
        .post(signInRoute)
        .send({
          ...testUser,
          password: 'wrongpassword',
        });
      expect(status).toBe(HTTP_STATUS.BAD_REQUEST);
      expect(body.message).toBe('HTTP 400: incorrect password');
    });

    it('should respond with a `404` status code when the user cannot be found', async () => {
      const { body, status } = await request(appInstance.app)
        .post(signInRoute)
        .send({
          ...testUser,
          email: 'wrong@email.com',
        });
      expect(status).toBe(404);
      expect(body.message).toBe('HTTP 404: User with this email is not found.');
    });

    it('should respond with a `400` status code when given an invalid request body', async () => {
      const { body, status } = await request(appInstance.app)
        .post(signInRoute)
        .send({
          fullName: 'zino',
          password: 'StrongPass123!',
        });
      expect(status).toBe(HTTP_STATUS.BAD_REQUEST);
      expect(body.message).toBe('HTTP 400: Auth Validation Error: email: Required')
    });
  });
});
