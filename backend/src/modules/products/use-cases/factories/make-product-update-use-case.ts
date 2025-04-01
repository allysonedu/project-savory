import { PrismaProductsRepository } from "@modules/products/repositories/prisma/prisma-products-repositories";

import { ProductUpdateUseCase } from "../products-update";

export function makeProductUpdateUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository();
  const productUpdateUseCase = new ProductUpdateUseCase(
    prismaProductsRepository
  );

  return productUpdateUseCase;
}
