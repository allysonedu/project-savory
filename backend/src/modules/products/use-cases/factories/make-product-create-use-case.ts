import { PrismaProductsRepository } from "@modules/products/repositories/prisma/prisma-products-repositories";
import { ProductCreateUseCase } from "../products-create";

export function makeProductCreateUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository();
  const productCreateUseCase = new ProductCreateUseCase(
    prismaProductsRepository
  );

  return productCreateUseCase;
}
