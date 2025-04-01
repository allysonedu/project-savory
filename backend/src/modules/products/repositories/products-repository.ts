import { Products } from "@prisma/client";
import { IProductsProps } from "../use-cases/products-create";
import { IPagination } from "@shared/dtos/common";

export interface IListFiltersProduct {
  q?: string;
}

export interface ProductRepository {
  createProduct(data: IProductsProps): Promise<Products>;
  getAllProducts(
    pagination: IPagination,
    filters?: IListFiltersProduct
  ): Promise<Products[]>;
  getOneProduct(id: string): Promise<Products | null>;
  deleteProduct(id: string): Promise<void>;
  updateProduct(id: string, data: any): Promise<Products>;
}
