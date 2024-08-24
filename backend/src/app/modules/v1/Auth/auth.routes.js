import { Router } from 'express';
import auth from '../../../middlewares/auth.js';
import { AuthController } from './auth.controller.js';

const router = Router();

router.post('/signup', AuthController.SignUp);
router.get('/', auth('ADMIN'), AuthController.GetAllUsers);
router.patch('/change-role', auth('ADMIN'), AuthController.ChangeRole);

export const AuthRoutes = router;
