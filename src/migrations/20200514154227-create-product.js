'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: Sequelize.STRING,
      uid: Sequelize.STRING,
      price: Sequelize.FLOAT,
      price_cost: Sequelize.FLOAT,
      choices: Sequelize.STRING,
      description: Sequelize.STRING,
      created_at: Sequelize.STRING,
      deleted: Sequelize.BOOLEAN,
      deleted_at: Sequelize.STRING,
      fk_image: Sequelize.INTEGER,
      fk_shop: Sequelize.INTEGER,
    }, {
      freezeTableName: true,
      timestamps: false,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shops');
  }
};