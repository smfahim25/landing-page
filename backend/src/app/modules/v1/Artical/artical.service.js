import httpStatus from 'http-status';
import AppError from '../../../errors/AppError.js';
import prisma from '../../../utils/prismaClient.js';
import { sendImageToCloudinary } from '../../../utils/sendImageToCloudinary.js';
const CreateCategory = async (payload) => {
  const category = await prisma.articalCategory.findFirst({
    where: { name: payload.name },
  });

  if (category) {
    throw new AppError(httpStatus.CONFLICT, 'Category already exist!');
  }
  const result = await prisma.articalCategory.create({ data: payload });
  return result;
};
const GetAllCategories = async () => {
  const result = await prisma.articalCategory.findMany();
  return result;
};
const CreateArtical = async (file, payload) => {
  // Check if the category exists
  const category = await prisma.articalCategory.findFirst({
    where: { id: payload.catId },
  });

  if (!category) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category not found!');
  }
  // Upload main blog image if it exists
  if (file) {
    const imageName = `${payload?.title}-main`;
    const path = file?.path;
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.img = secure_url;
  }
  // Create the article in the database
  const result = await prisma.artical.create({ data: payload });
  return result;
};
const GetImgURL = async (contentFile) => {
  // Upload content images if they exist
  if (contentFile) {
    let result;
    const imageName = `${contentFile?.filename}-main`;
    const path = contentFile?.path;
    // Send main blog image to Cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);

    // eslint-disable-next-line prefer-const
    result = secure_url;
    return result;
  }
};

const GetAllArticals = async (query) => {
  const id = query.id;
  const result = await prisma.artical.findMany({
    where: { catId: id, status: 'ACTIVE' },
    include: {
      category: true,
      user: true,
    },
  });
  return result;
};

const ArticalDetails = async (params) => {
  const result = await prisma.artical.findFirst({
    where: { id: params.id },
    include: {
      category: true,
      user: true,
    },
  });
  return result;
};
const EditArtical = async (params, file, payload) => {
  // Upload main blog image if it exists
  if (file) {
    const imageName = `${payload?.title}-main`;
    const path = file?.path;
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.img = secure_url;
  }
  const result = await prisma.artical.update({
    where: { id: params.id },
    data: payload,
  });
  return result;
};
const ArticleAnlytics = async () => {
  const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
  const result = {};

  for (const question of questions) {
    const stats = await prisma.questionery.groupBy({
      by: [question],
      _count: {
        [question]: true,
      },
      orderBy: {
        _count: {
          [question]: 'desc',
        },
      },
    });
    result[question] = stats.map((stat) => ({
      option: stat[question],
      count: stat._count[question],
    }));
  }

  return result;
};
export const ArticalService = {
  CreateCategory,
  CreateArtical,
  GetAllArticals,
  ArticalDetails,
  EditArtical,
  GetImgURL,
  GetAllCategories,
  ArticleAnlytics,
};
