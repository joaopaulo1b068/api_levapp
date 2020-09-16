import { Router as app } from './router'
import { GetENV } from './utils/env'
import knex from 'knex'

const PORT = GetENV('PORT') || 8080
app.listen(PORT, () => {
  console.log(`HTTP LISTENING ON ${PORT}`)
})

// pg.raw('select version()').then( ({rows}) => console.log(rows))