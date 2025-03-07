import { Request, Response } from "express";

import { makeUsersLoginUseCase } from "@modules/users/use-cases/factories/make-users-login-use-case";

import { env } from "@shared/environments/env";

import jwt from "jsonwebtoken";
import * as z from "zod";

export async function login(request: Request, response: Response) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = schema.parse(request.body);

  const usersLoginUseCase = makeUsersLoginUseCase();

  const user = await usersLoginUseCase.execute({ email, password });

  const token = jwt.sign(user, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

  response.json({
    user,
    token,
  });
}
