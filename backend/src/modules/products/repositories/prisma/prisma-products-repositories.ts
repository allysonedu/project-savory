import { prisma } from "@config/prisma";
import { IProductsProps } from "@modules/products/use-cases/products-create";
import { IPagination } from "@shared/dtos/common";
import { IListFiltersProduct } from "../products-repository";

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

  async getAllProducts(
    { limit, page }: IPagination,
    { q }: IListFiltersProduct
  ) {
    const whereProduct: any = {};
    if (q) {
      whereProduct.OR = { name: { contains: q, mode: "insensitive" } };
    }

    const skip = (page - 1) * limit;
    const take = limit;

    const products = await prisma.products.findMany({
      where: whereProduct,
      skip,
      take,
    });

    return products;
  }

  async getOneProduct(id: string) {
    const product = await prisma.products.findUnique({
      where: { id },
    });
    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    await prisma.products.delete({
      where: { id },
    });
  }

  async updateProduct(id: string, data: any) {
    const product = await prisma.products.update({
      where: { id },
      data,
    });
    return product;
  }
}
