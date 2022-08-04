import { Request, Response, NextFunction } from 'express';
import UserService from '../../services/user';

class UserController {
    async getListUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserService.getListUsers();
            res.json({
                message: 'Successfully get list users',
                data: result
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();
