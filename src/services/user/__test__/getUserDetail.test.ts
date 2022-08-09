import '../../../utils/jest/mockSequelize';
import UserService from '../index';
import UserRepo from '../../../repositories/user';
import User from '../../../models/user';

jest.mock('../../../repositories/user');

const mockedUserRepo = UserRepo as jest.Mocked<typeof UserRepo>;

beforeEach(() =>{
    jest.resetAllMocks();
});

describe('UserService.__getUserDetail', () => {
    test('Return user detail', async () => {
        //arrange
        const userId = 1;
        const mockResponse: User = new User({
            id: 1,
            first_name: 'A'
        });

        mockedUserRepo.getUserDetail.mockResolvedValue(mockResponse);

        //act
        const result = await UserService.getUserDetail(userId);

        //assert
        expect(result).toEqual(mockResponse);
        expect(UserRepo.getUserDetail).toHaveBeenCalledTimes(1);
        expect(UserRepo.getUserDetail).toBeCalledWith(userId);
    });
});
