import '../../../utils/jest/mockSequelize';
import UserService from '../index';
import UserRepo from '../../../repositories/user';
import User from '../../../models/user';

jest.mock('../../../repositories/user');

const mockedUserRepo = UserRepo as jest.Mocked<typeof UserRepo>;

beforeEach(() =>{
    jest.resetAllMocks();
});

describe('UserService.__getListUsers', () => {
    test('Return list users', async () => {
        //arrange
        const mockResponse: User[] = [
            new User({
                id: 1,
                first_name: 'A'
            }),
            new User({
                id: 1,
                first_name: 'A'
            }),
        ];

        mockedUserRepo.getListUsers.mockResolvedValue(mockResponse);

        //act
        const result = await UserService.getListUsers();

        //assert
        expect(result).toEqual(mockResponse);
        expect(UserRepo.getListUsers).toHaveBeenCalledTimes(1);
        expect(UserRepo.getListUsers).toBeCalledWith();
    });

    test('Return empty list', async () => {
        //arrange
        const mockResponse: User[] = [];

        mockedUserRepo.getListUsers.mockResolvedValue(mockResponse);

        //act
        const result = await UserService.getListUsers();

        //assert
        expect(result).toEqual(mockResponse);
        expect(UserRepo.getListUsers).toHaveBeenCalledTimes(1);
        expect(UserRepo.getListUsers).toBeCalledWith();
    });
});
