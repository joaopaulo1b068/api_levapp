import { ShopRouter } from '../src/router/shop'
import request from 'supertest'
import express from 'express'
import bodyParser from 'body-parser'
import { Database } from '../src/database/database'
import { EncodeBase64 } from '../src/libs/base64'

describe('Cadastro de Loja', () => {

  const db = Database

  beforeAll(async () => {
    await db.query('DELETE FROM shop WHERE id > 0')
  })

  const app = express()
  app.use(bodyParser.json())
  app.use('/', ShopRouter)

  test('/ POST ==> Cadastro Sem Form', async (done) => {
    const route = await request(app).post('/')
    expect(route.status).toBe(400)
    expect(route.body.name).toBe('ValidationError')
    done()
  })

  test('/ POST ==> Cadastro Com Form', async () => {
    const data = {
      "password": "senha",
      "email": "loja@loja.com",
      "name": "Lanches da Hora",
      "category": "LANCHONETE"
    }
    const route = await request(app)
      .post('/')
      .set('Content-Type', 'application/json')
      .send(data)
    expect(route.status).toBe(200)
    expect(route.body).toHaveProperty('name')
    expect(route.body).toHaveProperty('email')
    expect(route.body).toHaveProperty('token')
  })

})


