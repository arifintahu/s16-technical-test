import User from '../../models/user';

class UserRepo {
    async createUser(data: any): Promise<User | null> {
        return User.create(data);
    }

    async getListUsers(): Promise<User[]> {
        return User.findAll();
    }

    async getUserDetail(id: any): Promise<User | null> {
        return User.findByPk(id);
    }

    async deleteUser(id: any): Promise<any> {
        return User.destroy({
            where: {
                id: id
            }
        });
    }
}

export default new UserRepo();
