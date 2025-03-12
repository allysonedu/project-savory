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

  async saveTokenInDb(token: string, user_id: string) {
    await prisma.tokens.create({
      data: {
        token,
        user_id,
      },
    });
  }

  async getUserToken(token: string) {
    const userToken = await prisma.tokens.findFirst({
      where: {
        token,
      },
    });

    return userToken;
  }

  async updatePasswordAndDeleteToken(id: string, password: string) {
    const user = await prisma.users.update({
      data: {
        password,
      },
      where: {
        id,
      },
    });

    if (id) {
      await prisma.tokens.deleteMany({
        where: {
          user_id: id,
        },
      });
    }

    return user;
  }
}
