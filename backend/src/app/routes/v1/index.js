import { Router } from 'express';
import { ArticalRoutes } from '../../modules/v1/Artical/artical.routes.js';
import { AuthRoutes } from '../../modules/v1/Auth/auth.routes.js';
import { QuestionaryRoutes } from '../../modules/v1/Questionary/questionary.routes.js';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/articals',
    route: ArticalRoutes,
  },
  {
    path: '/questionaries',
    route: QuestionaryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
