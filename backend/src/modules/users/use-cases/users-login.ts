import { UsersRepository } from "../repositories/users-repository";
import { compareHashPasswords } from "@shared/helpers/encrypt";
import bcrypt from "bcrypt";
import { AppError } from "@shared/helpers/errors/AppError";

export interface IProps {
  email: string;
  password: string;
}

export class LoginUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }: IProps) {
    try {
      console.log("🔍 Buscando usuário com email:", email);

      const user = await this.usersRepository.findByEmail(email);
      console.log("🟢 Usuário encontrado:", user);

      if (!user) {
        throw new AppError("Usuário não encontrado", 400);
      }

      console.log("🟡 Senha cadastrada no banco:", user.password);
      console.log("🟠 Senha digitada:", password);

      const isPasswordMatch = await compareHashPasswords(
        password,
        user.password
      );
      console.log("🔑 Senhas conferem?", isPasswordMatch);

      if (!isPasswordMatch) {
        throw new AppError("Credenciais inválidas", 401);
      }

      return user;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }
}
