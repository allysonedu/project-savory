import { Router } from "express";

import {
  createProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";

import { tryCatch } from "@shared/helpers/errors/tryCatch";

const productRouter = Router();

productRouter.post("/", tryCatch(createProduct));
productRouter.get("/", tryCatch(getAllProducts));
productRouter.get("/:id", tryCatch(getOneProduct));
productRouter.delete("/:id", tryCatch(deleteProduct));
productRouter.put("/:id", tryCatch(updateProduct));

export { productRouter };
