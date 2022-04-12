import { Router, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const pingRoutes = Router();

pingRoutes.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  res.status(StatusCodes.OK).json({
    message: 'Nespresso, what else!',
  });
});

export default pingRoutes;
