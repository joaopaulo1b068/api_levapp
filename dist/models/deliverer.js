'use strict';

module.exports = function (sequelize, DataTypes) {
  var Deliverer = sequelize.define('deliverer', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});

  Deliverer.associate = function (models) {// associations can be defined here
  };

  return Deliverer;
};