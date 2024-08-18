import httpStatus from 'http-status';
import AppError from '../../../errors/AppError.js';
import prisma from '../../../utils/prismaClient.js';
const CreateCategory = async (payload) => {
  const result = await prisma.articalCategory.create({ data: payload });
  return result;
};
const CreateArtical = async (payload) => {
  const catgory = await prisma.articalCategory.findFirst({
    where: { id: payload.catId },
  });
  if (!catgory) {
    throw new AppError(httpStatus.NOT_FOUND, 'Catgory not found!');
  }
  const result = await prisma.artical.create({ data: payload });
  return result;
};

const GetAllArticals = async (query) => {
  const id = query.id;
  const result = await prisma.artical.findMany({
    where: { catId: id },
    include: {
      category: true,
    },
  });
  return result;
};
export const ArticalService = {
  CreateCategory,
  CreateArtical,
  GetAllArticals,
};
