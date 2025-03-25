import { Products } from "@prisma/client";
import { IProductsProps } from "../use-cases/products-create";

export interface ProductRepository {
  createProduct(data: IProductsProps): Promise<Products>;
}
