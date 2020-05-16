import express from 'express'
import request from 'supertest'
import { ProductRouter } from '../src/router/product'
import { GenerateAuthToken } from '../src/libs/tokens'
import { v4 } from 'uuid'

describe('Cadastro de Produto', () => {

  const app = express()
  app.use(ProductRouter)

  test('Verificação de ACL', done => {

    const token = 'Bearer ' + GenerateAuthToken({uid: v4(), role: 'SHOP'})
    request(app)
      .post('/')
      .set('Authorization', token)
      .then(res => {
        expect(res.status).toBe(202)
        done()
      })

  })

})