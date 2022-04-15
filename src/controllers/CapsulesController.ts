import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import CapsulesService from '../services/CapsulesService';

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const { capsuleType } = req.params;

  try {
    if (capsuleType !== undefined) {
      const capsulesFromChosenType = await CapsulesService.findAllByParam(capsuleType);
      return res.status(StatusCodes.OK).json(capsulesFromChosenType);
    }

    const allCapsules = await CapsulesService.findAll();
    return res.status(StatusCodes.OK).json(allCapsules);
  } catch (e) {
    next(e);
  }
};

export default {
  findAll,
};
