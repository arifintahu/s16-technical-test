import '../../../utils/jest/mockSequelize';
import UserService from '../index';
import UserRepo from '../../../repositories/user';
import { signToken } from '../../../utils/token';
import * as bcrypt from 'bcrypt';

jest.mock('../../../repositories/user');
jest.mock('../../../utils/token');
jest.mock('bcrypt');

const mockedUserRepo = UserRepo as jest.Mocked<typeof UserRepo>;
const mockbcrypt = bcrypt as jest.Mocked<typeof bcrypt>;
const mockSignToken = signToken as jest.MockedFunction<typeof signToken>;

beforeEach(() =>{
    jest.resetAllMocks();
});

describe('UserService.__login', () => {
    test('Return success login', async () => {
        //arrange
        const params = {
            email: 'John@mail.com',
            password: '12345'
        };
        const mockGetUserByEmail = {
            getDataValue: () => {}
        };
        const mockToken = 'ajsh5527261bjas';

        mockedUserRepo.getUserByEmail.mockResolvedValue(mockGetUserByEmail);
        mockbcrypt.compareSync.mockReturnValue(true);
        mockSignToken.mockResolvedValue(mockToken);

        //act
        const result = await UserService.login(params);

        //assert
        expect(result).toEqual({ token: mockToken });

        //assert UserRepo.getUserByEmail
        expect(UserRepo.getUserByEmail).toHaveBeenCalledTimes(1);
        expect(UserRepo.getUserByEmail).toHaveBeenCalledWith(params.email);

        //assert bcrypt.compareSync
        expect(bcrypt.compareSync).toHaveBeenCalledTimes(1);
        expect(bcrypt.compareSync).toHaveBeenCalledWith(params.password, mockGetUserByEmail.getDataValue());

        //assert signToken
        expect(signToken).toHaveBeenCalledTimes(1);
        expect(signToken).toHaveBeenCalledWith(params.email, '1d');
    });
});
