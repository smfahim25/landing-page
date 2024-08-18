import { Router } from 'express';
import { ArticalController } from './artical.controller.js';

const router = Router();
router.post('/create-category', ArticalController.CreateCategory);
router.post('/create-artical', ArticalController.CreateArtical);

export const ArticalRoutes = router;
