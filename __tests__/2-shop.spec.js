import { ShopRouter } from '../src/router/shop'
import request from 'supertest'
import express from 'express'
import bodyParser from 'body-parser'
import { Database } from '../src/database/database'
import { EncodeBase64 } from '../src/libs/base64'

const form = { password: "senha", email: "loja@loja.com" }

describe('Login de Loja', () => {

  const app = express()
  app.use(bodyParser.json())
  app.use('/', ShopRouter)

  test('Login com Email não Confirmado', done => {

    request(app)
      .post('/login')
      .send(form)
      .then(res => {
        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('err')
        expect(res.body.err).toBe('EMAIL_NOT_FOUND')
        done()
      })
  })

  test('Confirmar Email', done => {

    const email = EncodeBase64('loja@loja.com')
    request(app)
      .get(`/confirm/${email}`)
      .then(res => {
        expect(res.status).toBe(200)
        done()
      })
  })

  test('Login com Email Confirmado', done => {

    request(app)
      .post('/login')
      .send(form)
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('email')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('token')
        done()
      })
  })

})
