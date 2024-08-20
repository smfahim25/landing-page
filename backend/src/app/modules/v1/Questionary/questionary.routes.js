import { Router } from 'express';
import auth from '../../../middlewares/auth.js';
import { QuestionaryController } from './questionary.controller.js';

const router = Router();
router.post(
  '/create-questionary',
  auth('USER'),
  QuestionaryController.CreateQuestionary,
);
router.get('/', auth('ADMIN'), QuestionaryController.GetAllQuestionary);

export const QuestionaryRoutes = router;
