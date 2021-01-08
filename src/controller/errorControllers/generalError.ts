import { Request, Response } from 'express';

export const generalError = (error: Error, _: Request, res: Response): void => {
  res.status(500).send({ status: 'error', message: error.message });
};
