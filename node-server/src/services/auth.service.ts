import { CreateUserDto } from '@/dtos/user.dto';
import { HttpException } from '@/exceptions/HttpException';
import { HTTP_STATUS } from '@/utils/contants';
import validator from 'validator';
import { hash, genSalt } from 'bcrypt';
import {
  DataStoredInToken,
} from '@/interfaces/auth.interface';
import jwt from 'jsonwebtoken';
import { isEmpty } from '@/utils';
import UserRepository from '@/data/repositories/userRepo';
import { User } from '@prisma/client';

class AuthService {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  public async signUp(userData: CreateUserDto): Promise<{ token: string; newUser: Omit<User, 'password'> }> {
    const { email, password, fullName } = userData;
    // Check if user exists
    const userExists = await this.userRepo.findUserByEmail(email);

    if (userExists)
      throw new HttpException(
        HTTP_STATUS.CONFLICT,
        'User with this email already exists.',
      );

    // Hashing password
    const salt = await genSalt(10);
    const hashedPassword: string = await hash(password, salt);

    // Create new user
    const newUser  = await this.userRepo.createUser({
      email,
      fullName,
      password: hashedPassword,
    });

    // get the Jwt token
    const token = this.createToken(newUser);

    return {
      token,
      newUser: {email: newUser.email, fullName: newUser.fullName, role: newUser.role, id: newUser.id},
    };
  }

  // create jwt token
  public createToken(user: User):  string {
    const expiresIn = 60 * 60;
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not set.');
    }

    const dataStoredInToken: DataStoredInToken = {
      _id: user.id,
    };

    return jwt.sign(dataStoredInToken, secret, { expiresIn })
  }
}

export default AuthService;
