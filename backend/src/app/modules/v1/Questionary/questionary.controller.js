import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync.js';
import sendResponse from '../../../utils/sendResponse.js';
import { QuestionaryService } from './questionary.service.js';

const CreateQuestionary = catchAsync(async (req, res) => {
  const result = await QuestionaryService.CreateQuestionary(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Questionary Created Successfully!',
    data: result,
  });
});

const GetAllQuestionary = catchAsync(async (req, res) => {
  const result = await QuestionaryService.GetAllQuestionary();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Questionary Successfully!',
    data: result,
  });
});

export const QuestionaryController = {
  CreateQuestionary,
  GetAllQuestionary,
};
