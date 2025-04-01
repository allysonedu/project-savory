import { responseFormat } from "@shared/utils/response-format";
import { ProductRepository } from "../repositories/products-repository";
import { AppError } from "@shared/helpers/errors/AppError";

export class ProductGetOneUseCase {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(id: string) {
    const product = await this.productRepository.getOneProduct(id);

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    return responseFormat({
      data: product,
      message: "Product retrieved successfully",
      statusCode: 201,
    });
  }
}
