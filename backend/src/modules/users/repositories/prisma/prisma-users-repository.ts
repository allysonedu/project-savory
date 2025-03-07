import { IUsersCreateProps } from "@modules/users/use-cases/users-create";
import { prisma } from "../../../../config/prisma";

// import { generateHashPassword } from "@shared/helpers/encrypt";

export class PrismaUsersRepository {
  async createUsers(data: IUsersCreateProps) {
    const user = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    return user;
  }
}
