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

const findByPk = async (capsuleId: string): Promise<CapsulesModel | null> => {
  const capsule = await CapsulesModel.findByPk(Number(capsuleId));

  if (capsule === null) return null;
  return capsule as CapsulesModel;
};

export default {
  findAll,
  findAllByParam,
  findByPk,
};
