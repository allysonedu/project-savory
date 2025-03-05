import { Router } from "express";

import { authRouter } from "../../../modules/users/infra/routes/auth.routes";
import { userRouter } from "../../../modules/users/infra/routes/user.routes";

const routes = Router();

routes.use("/login", authRouter);
routes.use("/users", userRouter);

export default routes;
