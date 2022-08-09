import '../../../utils/jest/mockSequelize';
import UserService from '../index';
import UserRepo from '../../../repositories/user';
import User from '../../../models/user';
import * as bcrypt from 'bcrypt';

jest.mock('../../../repositories/user');
jest.mock('bcrypt');

const mockedUserRepo = UserRepo as jest.Mocked<typeof UserRepo>;
const mockbcrypt = bcrypt as jest.Mocked<typeof bcrypt>; 

beforeEach(() =>{
    jest.resetAllMocks();
});

describe('UserService.__createUser', () => {
    test('Return success create user', async () => {
        //arrange
        const params = {
            first_name: 'John',
            last_name: 'Doe',
            email: 'John@mail.com',
            password: '12345',
            role: 'admin'
        };
        const mockHashPassword = 'hshshhsh';
        const mockResponse = new User({
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
        });

        mockbcrypt.hashSync.mockReturnValue(mockHashPassword);
        mockedUserRepo.createUser.mockResolvedValue(mockResponse);

        //act
        const result = await UserService.createUser(params);

        //assert
        expect(result).toEqual(mockResponse);
        expect(UserRepo.createUser).toHaveBeenCalledTimes(1);
        expect(UserRepo.createUser).toBeCalledWith({
            ... params,
            password: mockHashPassword
        });
    });
});
