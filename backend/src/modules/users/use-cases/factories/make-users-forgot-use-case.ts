import { ForgetPasswordUseCase } from "../users-forgot";

import { PrismaUsersRepository } from "@modules/users/repositories/prisma/prisma-users-repository";

export function makeForgotPasswordUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository();
  const usersForgotUseCase = new ForgetPasswordUseCase(prismaUsersRepository);

  return usersForgotUseCase;
}
