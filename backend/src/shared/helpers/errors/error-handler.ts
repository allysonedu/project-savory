import { NextFunction, Request, Response } from 'express'

import { responseFormat } from '@shared/utils/response-format'
import { AppError } from './AppError'
import { logger } from '../logger'

const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  logger.error(`ERROR: ${error.statusCode} - ${error.message}`)

  if (error instanceof AppError) {
    return response.status(error.statusCode).json(
      responseFormat({
        statusCode: error.statusCode,
        message: error.message,
        data: null,
      }),
    )
  }

  return response.status(500).json(
    responseFormat({
      message: error.message,
      statusCode: 500,
      data: null,
    }),
  )
}

export { errorHandler }
