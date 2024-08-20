import { Router } from 'express';
import { upload } from '../../../utils/sendImageToCloudinary.js';
import { ArticalController } from './artical.controller.js';

const router = Router();
router.post('/create-category', ArticalController.CreateCategory);
router.post(
  '/create-artical',
  upload.fields([
    { name: 'file', maxCount: 1 }, // For main blog image
    { name: 'contentFile', maxCount: 12 }, // For blog content images
  ]),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ArticalController.CreateArtical,
);
router.get('/', ArticalController.GetAllArticals);
router.get('/artical-details/:id', ArticalController.ArticalDetails);
router.patch('/edit-artical/:id', ArticalController.EditArtical);

export const ArticalRoutes = router;
