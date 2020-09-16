import knex from 'knex'
import { GetENV } from '../utils/env'

export const Database = knex({
    client: 'postgres',
    connection: GetENV('DATABASE_URL'),
    log: true,
})