import { Database } from '../database/database'

const { DataTypes } = require('sequelize')
const seq = Database.getInstance()

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