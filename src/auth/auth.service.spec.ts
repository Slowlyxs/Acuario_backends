import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findByUsername: jest.fn(),
    create: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn().mockReturnValue('fake-jwt-token'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a token when login is successful', async () => {
    const fakeUser = {
      id: 1,
      username: 'testuser',
      password: await bcrypt.hash('password123', 10),
      role: 'admin',
    };

    mockUsersService.findByUsername.mockResolvedValue(fakeUser);

    const result = await service.login({
      username: 'testuser',
      password: 'password123',
    });

    expect(result.access_token).toBe('fake-jwt-token');
    expect(result.user).toEqual({
      id: fakeUser.id,
      username: fakeUser.username,
      role: fakeUser.role,
    });
  });

  it('should throw error if password is wrong', async () => {
    const fakeUser = {
      id: 1,
      username: 'testuser',
      password: await bcrypt.hash('password123', 10),
      role: 'admin',
    };

    mockUsersService.findByUsername.mockResolvedValue(fakeUser);

    await expect(
      service.login({
        username: 'testuser',
        password: 'wrongPassword',
      }),
    ).rejects.toThrow('Credenciales inválidas');
  });
});
