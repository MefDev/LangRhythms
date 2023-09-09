import { CreateUserDto } from '@/dtos/user.dto';
import AuthService from '@/services/auth.service';


jest.mock('@/db');
jest.mock('jsonwebtoken');

describe('AuthService', () => {
  let authService: AuthService;
  let mockUserRepo;

  beforeEach(() => {
    mockUserRepo = {
      createUser: jest.fn(),
      findUserByEmail: jest.fn()
    }
    authService = new AuthService(mockUserRepo);
  });

  it('should throw an error if input is empty', async () => {
    await expect(authService.signUp({} as CreateUserDto)).rejects.toThrow(
      'All fields must be filled.',
    );
  });

  it('should throw an error if email is empty or invalid', async () => {
    await expect(
      authService.signUp({
        email: 'invalid',
        password: 'StrongPassword123!',
        fullName: 'Zino Chan',
      }),
    ).rejects.toThrow('Invalid email format.');
  });

  it('should throw an error if password is empty or not strong', async () => {
    await expect(
      authService.signUp({
        email: 'zino@gmail.com',
        password: 'weakPass',
        fullName: 'Zino Chan',
      }),
    ).rejects.toThrow('Password does not meet the required criteria.');
  });

  it('should throw an error if fullName is empty or too short', async () => {
    await expect(
      authService.signUp({
        email: 'zino@gmail.com',
        password: 'StrongPassword123!',
        fullName: 'Zi',
      }),
    ).rejects.toThrow('Name must be between 3 to 50 characters.');
  });

});
