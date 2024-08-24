import httpStatus from 'http-status';
import config from '../../../config/index.js';
import AppError from '../../../errors/AppError.js';
import prisma from '../../../utils/prismaClient.js';
import { createToken } from './auth.utils.js';
const SignUp = async (payload) => {
  // const bcryptPassword = bcrypt.hashSync(payload.password, Number(config.SALT));
  // const data = {
  //   password: bcryptPassword,
  //   email: payload.email,
  //   name: payload.name,
  // };

  const getUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!getUser) {
    const jwtPayload = {
      email: payload.email,
      role: 'USER',
    };

    const accessToken = createToken(
      jwtPayload,
      config.JWT_ACCESS_SECRET,
      config.JWT_ACCESS_EXPIRES_IN,
    );

    const getUser = await prisma.user.create({ data: payload });
    return { accessToken, getUser };
  }

  const jwtPayload = {
    email: getUser?.email,
    role: getUser.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.JWT_ACCESS_SECRET,
    config.JWT_ACCESS_EXPIRES_IN,
  );

  // const { password, ...rest } = result;
  return { accessToken, getUser };
};

const GetAllUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const ChangeRole = async (payload) => {
  const getUser = await prisma.user.findFirst({ where: { id: payload.id } });
  if (!getUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }
  const result = await prisma.user.update({
    where: { id: getUser.id },
    data: { role: payload.role },
  });
  return result;
};

export const AuthService = {
  SignUp,
  GetAllUsers,
  ChangeRole,
};
