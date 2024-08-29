import { Router } from 'express';
import auth from '../../../middlewares/auth.js';
import { upload } from '../../../utils/sendImageToCloudinary.js';
import { ArticalController } from './artical.controller.js';

const router = Router();
router.post(
  '/create-category',
  auth('ADMIN'),
  ArticalController.CreateCategory,
);
router.get('/get-all-categories', ArticalController.GetAllCategories);
router.post(
  '/create-artical',
  auth('ADMIN'),
  upload.single('file'),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ArticalController.CreateArtical,
);
router.get('/', ArticalController.GetAllArticals);
router.get(
  '/article-analytics',
  auth('ADMIN'),
  ArticalController.ArticleAnlytics,
);
router.get('/artical-details/:id', ArticalController.ArticalDetails);
router.patch(
  '/edit-artical/:id',
  auth('ADMIN'),
  upload.single('file'),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ArticalController.EditArtical,
);

router.post(
  '/getImgURL',
  upload.single('contentFile'),
  ArticalController.GetImgURL,
);

export const ArticalRoutes = router;
