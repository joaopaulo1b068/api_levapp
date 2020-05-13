import { GetENV } from '../utils/env'

const { Sequelize } = require('sequelize')
// const db = GetENV('DATABASE_URL') || 'postgres://user:pass@0.0.0.0:5432/postgres'
const db = GetENV('DATABASE_URL')

class _Database {

  getInstance() {
    return this.instance
  }

  constructor() {
    this.instance = new Sequelize(db)
  }
}

export const Database = new _Database()
Object.freeze(Database)