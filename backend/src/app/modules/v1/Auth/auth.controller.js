import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync.js';
import sendResponse from '../../../utils/sendResponse.js';
import { AuthService } from './auth.service.js';

const SignUp = catchAsync(async (req, res) => {
  const result = await AuthService.SignUp(req.body);
  const { accessToken, getUser } = result;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User SignUp Successfully!',
    data: { accessToken, getUser },
  });
});
const GetAllUsers = catchAsync(async (req, res) => {
  const result = await AuthService.GetAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Users Successfully!',
    data: result,
  });
});

const ChangeRole = catchAsync(async (req, res) => {
  const result = await AuthService.ChangeRole(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Change User Role Successfully!',
    data: result,
  });
});

export const AuthController = { SignUp, GetAllUsers, ChangeRole };
