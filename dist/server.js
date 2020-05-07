"use strict";

require('dotenv').config();

var _require = require('sequelize'),
    Sequelize = _require.Sequelize,
    DataTypes = _require.DataTypes;

var db = process.env.DATABASE_URL;
var seq = new Sequelize(db);
var Deliverer = seq.define('deliverer', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
});
seq.authenticate().then(function () {
  console.log('CONNECTED ON' + db);
  Deliverer.create({
    email: 'Entregador 1'
  });
})["catch"](function (err) {
  return console.error('CONNECTION ERROR: ', err);
});