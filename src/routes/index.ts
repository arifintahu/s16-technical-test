import { Router } from 'express';
import UserController from '../controllers/user';

const router: Router = Router();

router.post('/users', [], UserController.createUser);
router.get('/users', [], UserController.getListUsers);
router.get('/users/:id', [], UserController.getUserDetail);
router.delete('/users/:id', [], UserController.deleteUser);

export default router;
