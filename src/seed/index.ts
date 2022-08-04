import UserService from '../services/user';

export async function seedUser() {
    const payload = {
        first_name: 'Admin',
        last_name: 'Admin',
        email: 'admin@s16.ventures',
        password: 'admin123',
        role: 'admin'
    };

    await UserService.createUser(payload);
}
