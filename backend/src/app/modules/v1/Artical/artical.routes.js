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
router.get(
  '/get-all-categories',
  auth('ADMIN'),
  ArticalController.GetAllCategories,
);
router.post(
  '/create-artical',
  auth('ADMIN'),
  upload.fields([
    { name: 'file', maxCount: 1 }, // For main blog image
  ]),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ArticalController.CreateArtical,
);
router.get('/', ArticalController.GetAllArticals);

router.get('/artical-details/:id', ArticalController.ArticalDetails);
router.patch('/edit-artical/:id', auth('ADMIN'), ArticalController.EditArtical);

router.post(
  '/getImgURL',
  auth('ADMIN'),
  upload.single('contentFile'),
  ArticalController.GetImgURL,
);

export const ArticalRoutes = router;
