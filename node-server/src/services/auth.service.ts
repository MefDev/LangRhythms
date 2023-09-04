import { CreateUserDto } from '@/dtos/user.dto';
import { HttpException } from '@/exceptions/HttpException';
import { HTTP_STATUS } from '@/utils/contants';
import validator from 'validator';
import { hash, genSalt } from 'bcrypt';
import prisma from '@/db';
import {
  TokenData,
  DataStoredInToken,
  User,
} from '@/interfaces/auth.interface';
import jwt from 'jsonwebtoken';
import { isEmpty } from '@/utils';

class AuthService {
  public async signUp(userData: CreateUserDto) {
    if (isEmpty(userData))
      throw new HttpException(
        HTTP_STATUS.BAD_REQUEST,
        'All fields must be filled.',
      );

    const { email, password, fullName } = userData;

    // Validate email
    if (!validator.isEmail(email))
      throw new HttpException(HTTP_STATUS.BAD_REQUEST, 'Invalid email format.');

    // Validate Password
    if (!validator.isStrongPassword(password))
      throw new HttpException(
        HTTP_STATUS.BAD_REQUEST,
        'Password does not meet the required criteria.',
      );

    // Validate fullName
    if (fullName && (fullName.length < 3 || fullName.length > 50))
      throw new HttpException(
        HTTP_STATUS.BAD_REQUEST,
        'Name must be between 3 to 50 characters.',
      );

    // Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists)
      throw new HttpException(
        HTTP_STATUS.CONFLICT,
        'User with this email already exists.',
      );

    // Hashing password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        fullName,
        password: hashedPassword,
      },
    });

    // get the Jwt token
    const tokenData = this.createToken(newUser);

    // create the cookie
    const cookie = this.createCookie(tokenData);
    return {
      cookie,
      newUser,
    };
  }

  // Set Cookie
  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Secure; SameSite=Strict; Max-Age=${tokenData.expiresIn}`;
  }

  // create jwt token
  public createToken(user: User): TokenData {
    const expiresIn = 60 * 60;
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not set.');
    }

    const dataStoredInToken: DataStoredInToken = {
      _id: user.id,
    };

    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }
}


export default AuthService;
