import { Router } from 'express';
import UserController from '../controllers/user';

const router: Router = Router();

router.get('/users', [], UserController.getListUsers);

export default router;
