import { Router } from "express";

import { createProduct } from "../controllers/product.controller";

import { tryCatch } from "@shared/helpers/errors/tryCatch";

const productRouter = Router();

productRouter.post("/", tryCatch(createProduct));

export { productRouter };
