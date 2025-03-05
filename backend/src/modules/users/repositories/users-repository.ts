import { Users, Tokens } from "@prisma/client";

import { IUsersCreateProps } from "../use-cases/users-create";

export interface UsersRepository {
  createUsers(data: IUsersCreateProps, password: string): Promise<Users>;
  findByEmail(email: string): Promise<Users | null>;
}
