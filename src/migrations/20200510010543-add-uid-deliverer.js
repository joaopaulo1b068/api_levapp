'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('deliverer', 'uid', Sequelize.STRING)
  },
  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('deliverer', 'uid', Sequelize.STRING)
  }
}
