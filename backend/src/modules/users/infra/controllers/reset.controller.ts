import { Request, Response } from "express";
import { makeResetPasswordCase } from "@modules/users/use-cases/factories/make-reset-password-case";
import * as z from "zod";

export async function resetPassword(request: Request, response: Response) {
  const schema = z.object({
    password: z.string().min(6),
  });

  const schemaParems = z.object({
    token: z.string(),
  });

  const { token } = schemaParems.parse(request.params);

  const { password } = schema.parse(request.body);

  const resetPasswordUseCase = makeResetPasswordCase();

  await resetPasswordUseCase.execute({
    token,
    password,
  });
}
