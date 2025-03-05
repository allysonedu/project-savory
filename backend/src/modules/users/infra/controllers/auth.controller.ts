import { Request, Response } from "express";

export async function login(request: Request, response: Response) {
  response.json({
    message: "Login successful",
  });
}
