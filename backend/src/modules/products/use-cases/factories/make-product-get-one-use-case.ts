import { PrismaProductsRepository } from "@modules/products/repositories/prisma/prisma-products-repositories";

import { ProductGetOneUseCase } from "../products-get-one";

export function makeProductGetOneUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository();
  const productGetOneUseCase = new ProductGetOneUseCase(
    prismaProductsRepository
  );

  return productGetOneUseCase;
}
