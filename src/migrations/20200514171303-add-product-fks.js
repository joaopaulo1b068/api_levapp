'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('product', ['fk_shop'],
        { type: 'FOREIGN KEY', name: 'fk_shop_product', references: { table: 'shop', field: 'id'} }
        )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('product', 'fk_shop')
  }

}
