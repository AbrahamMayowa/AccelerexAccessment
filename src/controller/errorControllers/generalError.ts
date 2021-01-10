import { Request, Response, NextFunction } from 'express';

export const generalError = (
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(500).send({ status: 'error', message: error.message });
};
