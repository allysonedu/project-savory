import { PrismaProductsRepository } from "@modules/products/repositories/prisma/prisma-products-repositories";

import { ProductDeleteUseCase } from "../products-delete";

export function makeProductDeleteUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository();
  const productDeleteUseCase = new ProductDeleteUseCase(
    prismaProductsRepository
  );

  return productDeleteUseCase;
}
