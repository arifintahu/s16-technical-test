import { Request, Response, NextFunction } from 'express';
import UserService from '../../services/user';

class UserController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserService.login(req.body);
            res.json({
                message: 'Successfully login',
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserService.createUser(req.body);
            res.json({
                message: 'Successfully create new user',
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

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

    async getUserDetail(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserService.getUserDetail(req.params.id);
            res.json({
                message: 'Successfully get user detail',
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            await UserService.deleteUser(req.params.id, req.params.userdata);
            res.json({
                message: 'Successfully delete user'
            });
        } catch (error) {
            next(error);
        }
    }

    async getCurrentUser(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({
                message: 'Successfully get current user',
                data: req.params.userdata
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();
