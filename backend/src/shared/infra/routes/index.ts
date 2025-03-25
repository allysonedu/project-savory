import { Router } from "express";

import { authRouter } from "../../../modules/users/infra/routes/auth.routes";
import { userRouter } from "../../../modules/users/infra/routes/user.routes";
import { forgotRouter } from "@modules/users/infra/routes/forgot.routes";
import { resetRouter } from "@modules/users/infra/routes/reset.routes";
import { productRouter } from "@modules/products/infra/routes/product.routes";

const routes = Router();

routes.use("/login", authRouter);
routes.use("/users", userRouter);
routes.use("/forgot-password", forgotRouter);
routes.use("/reset-password", resetRouter);

routes.use("/products", productRouter);

export default routes;
