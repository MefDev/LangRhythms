import UserRepository from '@/data/repositories/userRepo';
import { CreateUserDto } from '@/dtos/user.dto';
import { makeResponseJson } from '@/helpers';
import AuthService from '@/services/auth.service';
import { NextFunction, Request, Response } from 'express';
import { HTTP_STATUS } from '@/utils/contants';

class AuthController {
  private authService: AuthService;

  constructor(userRepository: UserRepository) {
    this.authService = new AuthService(userRepository);
  }

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { newUser, token } = await this.authService.signUp(userData);
      res.status(HTTP_STATUS.CREATED).json(makeResponseJson({ newUser, token }));
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
