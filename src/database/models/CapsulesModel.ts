import { DataTypes, Model } from 'sequelize';
import db from '.';

class CapsulesModel extends Model {
  declare capsuleId: number;

  declare capsuleType: string;

  declare capsuleLine: string;

  declare capsuleName: string;

  declare decaf: boolean;

  declare capsuleIntensity: number;

  declare capsuleRoastLevel: number;

  declare capsuleBitternessLevel: number;

  declare capsuleAcidityLevel: number;

  declare capsuleRobustnessLevel: number;

  declare capsuleAspects: string;

  declare capsuleAromaticNotes: string;

  declare capsuleOrigin: string;

  declare ristretto25: boolean;

  declare expresso40: boolean;

  declare lungo110: boolean;

  declare cappuccino: boolean;

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
    capsuleRoastLevel: {
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
    lungo110: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cappuccino: {
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
