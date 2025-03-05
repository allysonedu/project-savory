import { Router } from "express";

import { registerUsers } from "../controllers/user.controller";

import { tryCatch } from "@shared/helpers/errors/tryCatch";

const userRouter = Router();

userRouter.post("/", tryCatch(registerUsers));

export { userRouter };
