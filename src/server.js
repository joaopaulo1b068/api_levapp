require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize')

const db = process.env.DATABASE_URL
const seq = new Sequelize(db)

const Deliverer = seq.define('deliverer', {
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

seq.authenticate()
  .then(() => {
    console.log('CONNECTED ON' + db)
    Deliverer.create({email: 'Entregador 1'})
  })
  .catch(err => console.error('CONNECTION ERROR: ', err))