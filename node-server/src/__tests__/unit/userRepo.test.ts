import UserRepository from '@/data/repositories/userRepo';
import { prismaMock } from '@/tests/mocks/prismaSingleton';
import { UserRole } from '@prisma/client';
import { mockReset } from 'jest-mock-extended';

describe('User Repository', () => {
  let userRepo: UserRepository;
  beforeAll(() => {
    userRepo = new UserRepository();
    mockReset(prismaMock);
  });

  it('should create new user', async () => {
    const user = {
      id: '1',
      fullName: 'Zino',
      email: 'zino@gmail.com',
      password: 'StrongPass123!',
      role: UserRole.USER,
    };
    prismaMock.user.create.mockResolvedValue(user);

    await expect(userRepo.createUser(user)).resolves.toEqual({
      id: '1',
      fullName: 'Zino',
      email: 'zino@gmail.com',
      password: 'StrongPass123!',
      role: UserRole.USER,
    });
  });

  it('should through an error if no user with an email', async () => {
    prismaMock.user.findUnique.mockImplementation(() => {
      throw new Error('There is no such email baka!');
    });

    await expect(userRepo.findUserByEmail('zino@gmail')).rejects.toThrow();
    await expect(userRepo.findUserByEmail('zino@gmail')).rejects.toThrowError(
      'There is no such email baka!',
    );
  });

  it('should find an existing email', async () => {
    const user = {
      id: '1',
      fullName: 'gin',
      email: 'gin@gmail.com',
      password: 'StrongPass123!',
      role: UserRole.USER,
    };

	prismaMock.user.findUnique.mockResolvedValue(user)
	await expect(userRepo.findUserByEmail("gin@gmail.com")).resolves.toEqual(user)
  });
});
