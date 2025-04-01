import { responseFormat } from "@shared/utils/response-format";
import { ProductRepository } from "../repositories/products-repository";
import { AppError } from "@shared/helpers/errors/AppError";

export interface IProductsUpdateProps {
  name?: string;
  price?: number;
  description?: string;
}

export class ProductUpdateUseCase {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(data: IProductsUpdateProps, id: string) {
    const product = await this.productRepository.getOneProduct(id);

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    const updatedProduct = await this.productRepository.updateProduct(id, data);

    return responseFormat({
      data: updatedProduct,
      message: "Product updated successfully",
      statusCode: 200,
    });
  }
}
