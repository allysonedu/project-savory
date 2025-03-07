import { Router } from "express";

import { forgotPassword } from "../controllers/forgot.controller";

import { tryCatch } from "@shared/helpers/errors/tryCatch";

const forgotRouter = Router();

forgotRouter.post("/", tryCatch(forgotPassword));

export { forgotRouter };
