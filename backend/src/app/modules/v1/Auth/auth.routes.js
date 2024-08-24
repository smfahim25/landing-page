import { Router } from 'express';
import { AuthController } from './auth.controller.js';

const router = Router();

router.post('/signup', AuthController.SignUp);
router.get('/', AuthController.GetAllUsers);
router.patch('/change-role', AuthController.ChangeRole);

export const AuthRoutes = router;
