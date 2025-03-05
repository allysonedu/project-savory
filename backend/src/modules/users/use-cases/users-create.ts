import { UsersRepository } from "./../repositories/users-repository";
import { env } from "@shared/environments/env";

import { AppError } from "@shared/helpers/errors/AppError";

import { generateHashPassword } from "@shared/helpers/encrypt";

import { v4 as uuid } from "uuid";

export interface IUsersCreateProps {
  name: string;
  email: string;
  password: string;
}

export class UsersCreateUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: IUsersCreateProps) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new AppError("Email already in use");
    }

    const hashedPassword = await generateHashPassword(uuid());

    await this.usersRepository.createUsers(data, hashedPassword);
  }
}
