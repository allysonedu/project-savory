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

app.use(errorHandler as any);

app.listen(env.PORT, () => {
  logger.info(`API rodando na porta ${env.PORT}`);
});
