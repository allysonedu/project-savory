import { AppError } from "@shared/helpers/errors/AppError";

import { ProductRepository } from "../repositories/products-repository";

import { responseFormat } from "@shared/utils/response-format";

export class ProductDeleteUseCase {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(id: string) {
    const product = await this.productRepository.getOneProduct(id);

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    const payload = await this.productRepository.deleteProduct(id);

    return responseFormat({
      data: payload,
      message: "Product deleted successfully",
      statusCode: 200,
    });
  }
}
