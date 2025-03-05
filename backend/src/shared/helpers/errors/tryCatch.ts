import { NextFunction, Request, Response } from "express";

const tryCatch =
  (controller: any) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await controller(request, response);
    } catch (error: any) {
      next(error);
    }
  };

export { tryCatch };
