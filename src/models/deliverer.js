const { DataTypes, Sequelize } = require('sequelize')
const db = 'postgres://user:pass@0.0.0.0:5432/postgres'
const seq = new Sequelize(db)

export const Deliverer = seq.define('deliverer', {
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
})

/**

 'use strict';
 module.exports = (sequelize, DataTypes) => {
   const Deliverer = sequelize.define('deliverer', {
     email: DataTypes.STRING,
     password: DataTypes.STRING,
     name: DataTypes.STRING,
     uid: DataTypes.STRING,
   }, {})
   Deliverer.associate = function(models) {
     // associations can be defined here
   }
   return Deliverer
 }

*/