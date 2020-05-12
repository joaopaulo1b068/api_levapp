'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('shop', 'category', Sequelize.STRING)
  },
  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('shop', 'category', Sequelize.STRING)
  }
};
