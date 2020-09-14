// import { Router } from './router/router'
import { GetENV } from './utils/env'
import knex from 'knex'

const PORT = GetENV('PORT') || 8080
// Router.listen(PORT, () => {
//   console.log(`HTTP LISTENING ON ${PORT}`)
// })


const pg = knex({
  client: 'postgres',
  connection: process.env.DATABASE_URL,
  log: true,
})

// pg.select('*').from('user').then(res => console.log(res))

pg.raw('select version()').then( ({rows}) => console.log(rows))