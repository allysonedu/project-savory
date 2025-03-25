import { Request, Response } from "express";

import * as z from "zod";

import { makeProductCreateUseCase } from "@modules/products/use-cases/factories/make-product-create-use-case";

export async function createProduct(request: Request, response: Response) {
  const schema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
  });

  const { name, price, description } = schema.parse(request.body);

  const productCreateUseCase = makeProductCreateUseCase();

  const result = await productCreateUseCase.execute({
    name,
    price,
    description,
  });

  return {
    data: result,
  };
}
