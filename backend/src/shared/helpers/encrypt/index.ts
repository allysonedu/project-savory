import bcrypt from "bcrypt";

import { env } from "@shared/environments/env";

async function generateHashPassword(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, env.SALT_RESULT);
  return hash;
}

async function compareHashPasswords(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export { generateHashPassword, compareHashPasswords };
