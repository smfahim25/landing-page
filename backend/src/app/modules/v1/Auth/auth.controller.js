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

export const AuthController = { SignUp };
