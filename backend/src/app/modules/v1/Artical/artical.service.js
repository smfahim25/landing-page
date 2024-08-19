import httpStatus from 'http-status';
import AppError from '../../../errors/AppError.js';
import prisma from '../../../utils/prismaClient.js';
import { sendImageToCloudinary } from '../../../utils/sendImageToCloudinary.js';
const CreateCategory = async (payload) => {
  const result = await prisma.articalCategory.create({ data: payload });
  return result;
};
const CreateArtical = async (file, payload) => {
  const catgory = await prisma.articalCategory.findFirst({
    where: { id: payload.catId },
  });
  if (!catgory) {
    throw new AppError(httpStatus.NOT_FOUND, 'Catgory not found!');
  }
  if (file) {
    const imageName = `${payload?.title}`;
    const path = file?.path;
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.img = secure_url;
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
const ArticalDetails = async (params) => {
  const result = await prisma.artical.findFirst({
    where: { id: params.id },
    include: {
      category: true,
    },
  });
  return result;
};
const EditArtical = async (params, payload) => {
  const result = await prisma.artical.update({
    where: { id: params.id },
    data: payload,
  });
  return result;
};
export const ArticalService = {
  CreateCategory,
  CreateArtical,
  GetAllArticals,
  ArticalDetails,
  EditArtical,
};
