import { Users, Tokens } from "@prisma/client";

import { IUsersCreateProps } from "../use-cases/users-create";

export interface UsersRepository {
  createUsers(data: IUsersCreateProps): Promise<Users>;
  findByEmail(email: string): Promise<Users | null>;
  saveTokenInDb(token: string, id_user: string): Promise<void>;
  updatePasswordAndDeleteToken(id: string, password: string): Promise<Users>;
  getUserToken(token: string): Promise<Tokens | null>;
}
