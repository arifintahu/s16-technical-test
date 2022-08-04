import { Router } from 'express';
import UserController from '../controllers/user';
import Authorization from '../middlewares/authorization';

const router: Router = Router();

router.post('/login', [], UserController.login);
router.post('/users', [], UserController.createUser);
router.get('/users', [], UserController.getListUsers);
router.get('/users/current', [Authorization], UserController.getCurrentUser);
router.get('/users/:id', [], UserController.getUserDetail);
router.delete('/users/:id', [], UserController.deleteUser);

export default router;
