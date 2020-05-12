'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shop', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      uid: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      deleted_at: {
        type: Sequelize.STRING
      },
      reset_pass: {
        type: Sequelize.STRING
      },
      email_confirmed: {
        type: Sequelize.BOOLEAN
      },
      fk_image: {
        type: Sequelize.INTEGER
      }
    }, {
      freezeTableName: true,
      timestamps: false,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shops');
  }
};