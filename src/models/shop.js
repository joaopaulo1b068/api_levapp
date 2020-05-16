import { Database } from '../database/database'

const { DataTypes } = require('sequelize')
//const seq = Database.getInstance()

export function ShopModel (database = Database ) {

  return database.define('shop', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    uid: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN,
    deleted_at: DataTypes.STRING,
    reset_pass: DataTypes.STRING,
    email_confirmed: DataTypes.BOOLEAN,
    fk_image: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false,
  })

}
