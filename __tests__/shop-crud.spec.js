import { ShopRouter } from '../src/router/shop'
import request from 'supertest'
import express from 'express'
import bodyParser from 'body-parser'
import { Database } from '../src/database/database'

describe('Routas /shop -- Operações CRUD', () => {

  beforeAll( async () => {
    const db = Database.getInstance()
    await db.query('DELETE FROM shop WHERE id > 0')
  })

  afterAll( async () => {
    const db = Database.getInstance()
    await db.query('DELETE FROM shop WHERE id > 0')
  })

  const app = express()
  app.use(bodyParser.json())
  app.use('/', ShopRouter)

  test('/ POST ==> No Data', async () => {
    const route = await request(app).post('/')
    expect(route.status).toBe(400)
    expect(route.body.name).toBe('ValidationError')
  })

  test('/POST ==> ', async () => {
    const data = {
      "password": "senha",
      "email": "loja@loja.com",
      "name": "Lanches da Hora",
      "category": "LANCHONETE"
    }
    const route = await request(app)
      .post('/')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(data))

    expect(route.status).toBe(200)
    expect(route.body).toHaveProperty('name')
    expect(route.body).toHaveProperty('email')
    expect(route.body).toHaveProperty('token')
  })

})
