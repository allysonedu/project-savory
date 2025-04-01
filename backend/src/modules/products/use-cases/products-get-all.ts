import { IPagination } from "./../../../shared/dtos/common";
import { responseFormat } from "@shared/utils/response-format";

import {
  IListFiltersProduct,
  ProductRepository,
} from "../repositories/products-repository";

export class ProductsGetAllUseCase {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }
  async execute(pagination: IPagination, filters: IListFiltersProduct) {
    const products = await this.productRepository.getAllProducts(
      pagination,
      filters
    );

    return responseFormat({
      data: products,
      message: "Products fetched successfully",
      statusCode: 200,
    });
  }
}
