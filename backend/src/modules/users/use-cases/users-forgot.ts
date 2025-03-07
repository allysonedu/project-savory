import { MailProvider } from "@shared/helpers/email";
import { forgotPassword } from "@shared/helpers/email/templates/passwordRecovery";
import { UsersRepository } from "../repositories/users-repository";
import { AppError } from "@shared/helpers/errors/AppError";
import { env } from "@shared/environments/env";
import { v4 as uuid } from "uuid";

export class ForgetPasswordUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User not found", 400);
    }

    const mailProvider = new MailProvider();

    const token = uuid();

    const html = forgotPassword(user.name, token);

    await this.usersRepository.saveTokenInDb(token, user.id);

    return mailProvider.sendMail({
      to: email,
      subject: "Esqueci minha senha [Ally]",
      template: html,
    });
  }
}
