import { Router } from "express";

import { resetPassword } from "../controllers/reset.controller";
import { tryCatch } from "@shared/helpers/errors/tryCatch";

const resetRouter = Router();

resetRouter.patch("/:token", tryCatch(resetPassword));

export { resetRouter };
