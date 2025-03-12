import { UsersRepository } from "../repositories/users-repository";
import { generateHashPassword } from "../../../shared/helpers/encrypt";
import { AppError } from "@shared/helpers/errors/AppError";

interface IResetRequest {
  token: string;
  password: string;
}

export class ResetPasswordCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: IResetRequest) {
    const userToken = await this.usersRepository.getUserToken(data.token);

    if (!userToken) {
      throw new AppError("Token not found or expired", 401);
    }

    const passwordHashed = await generateHashPassword(data.password);

    const reset = {
      userId: userToken.user_id,
      password: passwordHashed,
    };

    const result = await this.usersRepository.updatePasswordAndDeleteToken(
      reset.userId,
      reset.password
    );
    return result;
  }
}
