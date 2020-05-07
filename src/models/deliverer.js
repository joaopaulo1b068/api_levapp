'use strict';

module.exports = (sequelize, DataTypes) => {
  const Deliverer = sequelize.define('deliverer', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {})
  Deliverer.associate = function(models) {
    // associations can be defined here
  }
  return Deliverer
}