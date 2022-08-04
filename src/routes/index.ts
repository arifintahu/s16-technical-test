import { Router } from 'express';
import UserController from '../controllers/user';
import Authorization from '../middlewares/authorization';

const router: Router = Router();

router.post('/login', [], UserController.login);
router.post('/users', [Authorization], UserController.createUser);
router.get('/users', [Authorization], UserController.getListUsers);
router.get('/users/current', [Authorization], UserController.getCurrentUser);
router.get('/users/:id', [Authorization], UserController.getUserDetail);
router.delete('/users/:id', [Authorization], UserController.deleteUser);

export default router;
