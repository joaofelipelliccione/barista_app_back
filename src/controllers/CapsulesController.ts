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

const findByPk = async (req: Request, res: Response, next: NextFunction) => {
  const { capsuleId } = req.params;

  try {
    const capsule = await CapsulesService.findByPk(capsuleId);
    if (capsule === null) {
      return next({ code: StatusCodes.NOT_FOUND, message: 'No capsule with such id.' });
    }

    return res.status(StatusCodes.OK).json(capsule);
  } catch (e) {
    next(e);
  }
};

export default {
  findAll,
  findByPk,
};
