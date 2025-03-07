import { Router } from "express";

import { login } from "../controllers/auth.controller";
import { tryCatch } from "@shared/helpers/errors/tryCatch";

const authRouter = Router();

authRouter.post("/", tryCatch(login));

export { authRouter };
