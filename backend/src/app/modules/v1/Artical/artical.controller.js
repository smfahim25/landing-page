import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync.js';
import sendResponse from '../../../utils/sendResponse.js';
import { ArticalService } from './artical.service.js';

const CreateCategory = catchAsync(async (req, res) => {
  const result = await ArticalService.CreateCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Artical Category Created Successfully!',
    data: result,
  });
});
const GetAllCategories = catchAsync(async (req, res) => {
  const result = await ArticalService.GetAllCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Categories Successfully!',
    data: result,
  });
});
const CreateArtical = catchAsync(async (req, res) => {
  const result = await ArticalService.CreateArtical(req.file, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Artical Created Successfully!',
    data: result,
  });
});

const GetImgURL = catchAsync(async (req, res) => {
  const result = await ArticalService.GetImgURL(req.file);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Image URL Successfully!',
    data: result,
  });
});
const ArticleAnlytics = catchAsync(async (req, res) => {
  const result = await ArticalService.ArticleAnlytics();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Article Anlytics Successfully!',
    data: result,
  });
});
const GetAllArticals = catchAsync(async (req, res) => {
  const result = await ArticalService.GetAllArticals(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Articles Successfully!',
    data: result,
  });
});

const ArticalDetails = catchAsync(async (req, res) => {
  const result = await ArticalService.ArticalDetails(req.params);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Article Details Get Successfully!',
    data: result,
  });
});
const EditArtical = catchAsync(async (req, res) => {
  const result = await ArticalService.EditArtical(
    req.params,
    req.file,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Article Update Successfully!',
    data: result,
  });
});

export const ArticalController = {
  CreateArtical,
  GetImgURL,
  CreateCategory,
  GetAllArticals,
  ArticalDetails,
  EditArtical,
  GetAllCategories,
  ArticleAnlytics,
};
