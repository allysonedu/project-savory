import { prisma } from "@config/prisma";
import { IProductsProps } from "@modules/products/use-cases/products-create";

export class PrismaProductsRepository {
  async createProduct(data: IProductsProps) {
    const product = await prisma.products.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
      },
    });
    return product;
  }
}
