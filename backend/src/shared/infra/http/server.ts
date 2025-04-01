import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
import { logger } from "../../helpers/logger";
import { AppError } from "../../helpers/errors/AppError";

import { env } from "../../environments/env";
import routes from "../routes";
import { errorHandler } from "@shared/helpers/errors/error-handler";

const app = express();

app.use(express.json());

app.get("/health", (_: Request, response: Response) => {
  logger.debug("Health Check");

  response.status(200).json({
    status: 200,
    message: "App ONLINE",
  });
});

app.use(routes);

app.use((err: Error, _request: Request, response: Response) => {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  response.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(env.PORT, () => {
  logger.info(`API rodando na porta ${env.PORT}`);
});
