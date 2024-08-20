import prisma from '../../../utils/prismaClient.js';
const CreateQuestionary = async (payload) => {
  const result = await prisma.questionery.create({ data: payload });
  return result;
};

const GetAllQuestionary = async () => {
  const result = await prisma.questionery.findMany();
  return result;
};

export const QuestionaryService = {
  CreateQuestionary,
  GetAllQuestionary,
};
