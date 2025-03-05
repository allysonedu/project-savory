import { Request, Response } from "express";

import { makeUsersCreateUseCase } from "@modules/users/use-cases/factories/make-users-create-use-case";

import * as z from "zod";

export async function registerUsers(request: Request, response: Response) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, name, password } = schema.parse(request.body);

  const registerUseCase = makeUsersCreateUseCase();

  await registerUseCase.execute({
    name,
    email,
    password,
  });

  response.json({
    data: {
      message:
        "User created successfully! check your email to activate your account.",
    },
  });
}
