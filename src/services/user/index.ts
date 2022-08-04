import UserRepo from '../../repositories/user';
import * as bcrypt from 'bcrypt';
import { signToken } from '../../utils/token';

class UserService {
    async login(params: any) {
        const user = await UserRepo.getUserByEmail(params.email);

        if (!user) {
            throw new Error('Email not found');
        }

        const isValid = bcrypt.compareSync(
            params.password,
            user?.getDataValue('password')
        );

        if (!isValid) {
            throw new Error('Password is wrong');
        }

        const expires = '1d';
        const token = await signToken(params.email, expires);
        if (!token) {
            throw new Error('Invalid token');
        }
        return {
            token
        };
    }

    async createUser(data: any) {
        const hashedPassword = await bcrypt.hashSync(data.password, 5);
        const payload = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: hashedPassword,
            role: data.role
        };
        return UserRepo.createUser(payload);
    }

    async getListUsers() {
        return UserRepo.getListUsers();
    }

    async getUserDetail(userId: any) {
        return UserRepo.getUserDetail(userId);
    }

    async deleteUser(userId: any) {
        return UserRepo.deleteUser(userId);
    }
}

export default new UserService();
