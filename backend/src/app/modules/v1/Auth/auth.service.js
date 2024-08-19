import prisma from '../../../utils/prismaClient.js';
const SignUp = async (payload) => {
  // const bcryptPassword = bcrypt.hashSync(payload.password, Number(config.SALT));
  // const data = {
  //   password: bcryptPassword,
  //   email: payload.email,
  //   name: payload.name,
  // };

  const result = await prisma.user.create({ data: payload });

  // const { password, ...rest } = result;
  return result;
};

export const AuthService = {
  SignUp,
};
