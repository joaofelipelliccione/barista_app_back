/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from 'sequelize';

const databaseConfig = require('../config/database');

export default new Sequelize(databaseConfig);
