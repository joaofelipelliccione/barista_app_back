import { DataTypes, Model } from 'sequelize';
import db from '.';

class CapsulesModel extends Model {
  declare capsuleId: number;

  declare capsuleType: string;

  declare capsuleLine: string;

  declare capsuleName: string;

  declare decaf: boolean;

  declare capsuleIntensity: number;

  declare capsuleRoastingLevel: number;

  declare capsuleBitternessLevel: number;

  declare capsuleAcidityLevel: number;

  declare capsuleRobustnessLevel: number;

  declare capsuleAspects: string;

  declare capsuleAromaticNotes: string;

  declare capsuleOrigin: string;

  declare ristretto25: boolean;

  declare expresso40: boolean;

  declare dblExpresso80: boolean;

  declare lungo110: boolean;

  declare granLungo150: boolean;

  declare coffe230: boolean;

  declare carafe535: boolean;

  declare cappuccino: boolean;

  declare dblCappuccino: boolean;

  declare capsuleImgSrc: string;

  declare backgroundImgSrc: string;
}

CapsulesModel.init(
  {
    capsuleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    capsuleType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capsuleLine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capsuleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    decaf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    capsuleIntensity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capsuleRoastingLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capsuleBitternessLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capsuleAcidityLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capsuleRobustnessLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capsuleAspects: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capsuleAromaticNotes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capsuleOrigin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ristretto25: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    expresso40: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dblExpresso80: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    lungo110: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    granLungo150: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    coffe230: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    carafe535: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cappuccino: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dblCappuccino: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    capsuleImgSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backgroundImgSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'capsules',
    tableName: 'Capsules',
    timestamps: false,
  },
);

export default CapsulesModel;
