import { ResetPasswordCase } from "../users-reset";
import { PrismaUsersRepository } from "@modules/users/repositories/prisma/prisma-users-repository";

export function makeResetPasswordCase() {
  const prismaUsersRepository = new PrismaUsersRepository();

  const resetPasswordCase = new ResetPasswordCase(prismaUsersRepository);

  return resetPasswordCase;
}
