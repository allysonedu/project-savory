import { PrismaProductsRepository } from "@modules/products/repositories/prisma/prisma-products-repositories";
import { ProductsGetAllUseCase } from "../products-get-all";

export function makeProductGetAllUseCase() {
  const prismaProductsRepository = new PrismaProductsRepository();
  const productGetAllUseCase = new ProductsGetAllUseCase(
    prismaProductsRepository
  );

  return productGetAllUseCase;
}
