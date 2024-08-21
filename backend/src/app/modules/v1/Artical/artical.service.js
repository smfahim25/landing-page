import httpStatus from 'http-status';
import AppError from '../../../errors/AppError.js';
import prisma from '../../../utils/prismaClient.js';
import { sendImageToCloudinary } from '../../../utils/sendImageToCloudinary.js';
const CreateCategory = async (payload) => {
  const result = await prisma.articalCategory.create({ data: payload });
  return result;
};
const GetAllCategories = async () => {
  const result = await prisma.category.findMany();
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
  if (file && file.length > 0) {
    const imageName = `${payload?.title}-main`;
    const path = file[0]?.path;

    // Send main blog image to Cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.img = secure_url;
  }
  // Create the article in the database
  const result = await prisma.artical.create({ data: payload });
  return result;
};
const GetImgURL = async (contentFile) => {
  // Upload content images if they exist
  const result = {};
  if (contentFile && contentFile.length > 0) {
    const contentImageUrls = [];

    for (let i = 0; i < contentFile.length; i++) {
      const file = contentFile[i];
      const imageName = `${contentFile?.filename}-content-${i}`;
      const path = file?.path;

      // Send content image to Cloudinary
      const { secure_url } = await sendImageToCloudinary(imageName, path);
      contentImageUrls.push(secure_url);
    }
    result.contentImages = contentImageUrls;
  }
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
  GetImgURL,
  GetAllCategories,
};
