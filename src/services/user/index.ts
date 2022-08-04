import UserRepo from '../../repositories/user';
import * as bcrypt from 'bcrypt';
class UserService {
    async createUser(data: any) {
        const hashedPassword = await bcrypt.hashSync(data.password, 5);
        const payload = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: hashedPassword,
            role: data.role
        }
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
