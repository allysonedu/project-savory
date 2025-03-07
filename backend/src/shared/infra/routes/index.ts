import { Router } from "express";

import { authRouter } from "../../../modules/users/infra/routes/auth.routes";
import { userRouter } from "../../../modules/users/infra/routes/user.routes";
import { forgotRouter } from "@modules/users/infra/routes/forgot.routes";

const routes = Router();

routes.use("/login", authRouter);
routes.use("/users", userRouter);
routes.use("/forgot-password", forgotRouter);

export default routes;
