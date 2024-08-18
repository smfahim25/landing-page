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
const CreateArtical = catchAsync(async (req, res) => {
  const result = await ArticalService.CreateArtical(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Artical Created Successfully!',
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

export const ArticalController = {
  CreateArtical,
  CreateCategory,
  GetAllArticals,
};
