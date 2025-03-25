import { ProductRepository } from "../repositories/products-repository";
import { responseFormat } from "@shared/utils/response-format";

export interface IProductsProps {
  name: string;
  price: number;
  description: string;
}

export class ProductCreateUseCase {
  constructor(private productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(data: IProductsProps) {
    const product = await this.productRepository.createProduct(data);
    return responseFormat({
      data: product,
      message: "Product created successfully",
      statusCode: 201,
    });
  }
}
