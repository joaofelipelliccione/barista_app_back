/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Capsules', {
      capsule_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      capsule_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capsule_line: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capsule_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      decaf: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      capsule_intensity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capsule_roast_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capsule_bitterness_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capsule_acidity_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capsule_robustness_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capsule_aspects: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capsule_aromatic_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capsule_origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ristretto_25: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      expresso_40: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      lungo_110: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      cappuccino: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      capsule_img_src: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      background_img_src: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Capsules');
  },
};
