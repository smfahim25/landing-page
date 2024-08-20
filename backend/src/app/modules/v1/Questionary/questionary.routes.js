import { Router } from 'express';
import { QuestionaryController } from './questionary.controller.js';

const router = Router();
router.post('/create-questionary', QuestionaryController.CreateQuestionary);
router.get('/', QuestionaryController.GetAllQuestionary);

export const QuestionaryRoutes = router;
