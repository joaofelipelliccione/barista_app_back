import CapsulesModel from '../database/models/CapsulesModel';

const findAll = async (): Promise<CapsulesModel[]> => {
  const allCapsules = await CapsulesModel.findAll();
  return allCapsules;
};

const findAllByParam = async (capsuleType: string): Promise<CapsulesModel[]> => { // Lazy Loading
  const capsulesFromChosenType = await CapsulesModel.findAll({
    where: { capsuleType: capsuleType === 'Original' ? 'Original' : 'Vertuo' },
  });

  return capsulesFromChosenType as CapsulesModel[];
};

export default {
  findAll,
  findAllByParam,
};
