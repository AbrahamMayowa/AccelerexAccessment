import { Request, Response, NextFunction } from 'express';

export const generalError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send({ status: 'error', message: error.message });
};
