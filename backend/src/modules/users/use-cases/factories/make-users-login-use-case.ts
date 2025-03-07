import { PrismaUsersRepository } from "@modules/users/repositories/prisma/prisma-users-repository";
import { LoginUseCase } from "../users-login";

export function makeUsersLoginUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository();
  const usersLoginUseCase = new LoginUseCase(prismaUsersRepository);

  return usersLoginUseCase;
}
