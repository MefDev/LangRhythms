import prisma from '@/db';
import { Prisma, User } from '@prisma/client';


class UserRepository {
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await prisma.user.create({
      data,
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}

export default UserRepository;

