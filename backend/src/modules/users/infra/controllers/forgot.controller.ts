import { Request, Response } from "express";
import { makeForgotPasswordUseCase } from "@modules/users/use-cases/factories/make-users-forgot-use-case";
import * as z from "zod";

export async function forgotPassword(request: Request, response: Response) {
  const schema = z.object({
    email: z.string().email(),
  });
  const { email } = schema.parse(request.body);

  const forgotPasswordUseCase = makeForgotPasswordUseCase();

  await forgotPasswordUseCase.execute(email);

  response.json({
    data: {
      message: "Check your email to reset your password.",
    },
  });
}
