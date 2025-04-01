import { Request, Response } from "express";

import * as z from "zod";

import { makeProductCreateUseCase } from "@modules/products/use-cases/factories/make-product-create-use-case";
import { makeProductGetAllUseCase } from "@modules/products/use-cases/factories/make-product-get-all-use-case";
import { makeProductGetOneUseCase } from "@modules/products/use-cases/factories/make-product-get-one-use-case";
import { makeProductDeleteUseCase } from "@modules/products/use-cases/factories/make-product-delete-use-case";
import { makeProductUpdateUseCase } from "@modules/products/use-cases/factories/make-product-update-use-case";
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

  response.json({
    data: result,
  });
}

export async function getAllProducts(request: Request, response: Response) {
  const achemaParas = z.object({
    q: z.string().optional(),
    page: z.string().transform((val) => parseInt(val, 10)),
    limit: z.string().transform((val) => parseInt(val, 10)),
  });

  const { q, page, limit } = achemaParas.parse(request.query);

  const getAllProductsUseCase = makeProductGetAllUseCase();

  const result = await getAllProductsUseCase.execute({ page, limit }, { q });

  response.json({
    data: result,
  });
}

export async function getOneProduct(request: Request, response: Response) {
  const schemaParams = z.object({
    id: z.string(),
  });
  const { id } = schemaParams.parse(request.params);

  const getOneProductUseCase = makeProductGetOneUseCase();

  const result = await getOneProductUseCase.execute(id);

  response.json({
    data: result,
  });
}

export async function deleteProduct(request: Request, response: Response) {
  const schemaParams = z.object({
    id: z.string(),
  });
  const { id } = schemaParams.parse(request.params);

  const productDeleteUseCase = makeProductDeleteUseCase();

  await productDeleteUseCase.execute(id);

  response.json({
    data: {
      message: "Product deleted successfully.",
    },
  });
}

export async function updateProduct(request: Request, response: Response) {
  const schema = z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
  });

  const schemaParams = z.object({
    id: z.string(),
  });

  const { id } = schemaParams.parse(request.params);
  const { name, price, description } = schema.parse(request.body);

  const productUpdateUseCase = makeProductUpdateUseCase();

  await productUpdateUseCase.execute({ name, price, description }, id);

  response.json({
    message: "Order General updated successfully!",
    data: { id },
  });
}
