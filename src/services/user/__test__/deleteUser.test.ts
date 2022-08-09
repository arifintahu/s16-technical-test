import '../../../utils/jest/mockSequelize';
import UserService from '../index';
import UserRepo from '../../../repositories/user';
import User from '../../../models/user';

jest.mock('../../../repositories/user');

const mockedUserRepo = UserRepo as jest.Mocked<typeof UserRepo>;

beforeEach(() =>{
    jest.resetAllMocks();
});

describe('UserService.__deleteUser', () => {
    test('Return success delete user', async () => {
        //arrange
        const userId = 1;
        const userdata = {
            role: 'admin'
        };
        const mockResponse = true;

        mockedUserRepo.deleteUser.mockResolvedValue(mockResponse);

        //act
        const result = await UserService.deleteUser(userId, userdata);

        //assert
        expect(result).toEqual(mockResponse);
        expect(UserRepo.deleteUser).toHaveBeenCalledTimes(1);
        expect(UserRepo.deleteUser).toBeCalledWith(userId);
    });

    test('Throw invalid role delete user', () => {
        //arrange
        const userId = 1;
        const userdata = {
            role: 'user'
        };
        const error = 'Only admin can delete';

        //act
        const result = UserService.deleteUser(userId, userdata);

        //assert
        expect(result).rejects.toThrowError(error);
    });
});
