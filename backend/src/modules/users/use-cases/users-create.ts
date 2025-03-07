import { UsersRepository } from "../repositories/users-repository";
import { AppError } from "@shared/helpers/errors/AppError";
import { generateHashPassword } from "@shared/helpers/encrypt";

export interface IUsersCreateProps {
  name: string;
  email: string;
  password: string;
}

export class UsersCreateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: IUsersCreateProps) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new AppError("Email already in use", 400);
    }

    const hashedPassword = await generateHashPassword(data.password);

    const newUser = {
      ...data,
      password: hashedPassword,
    };

    // Cria o usuário no banco
    await this.usersRepository.createUsers(newUser);

    return { message: "User created successfully" };
  }
}
