import express from 'express'
import supertest from 'supertest'
import { AuthMiddleware } from '../src/middlewares/auth'
import { GenerateAuthToken } from '../src/libs/tokens'
import { v4 } from 'uuid'

describe('Middleware de Autenticação', () => {

  const app = express()

  /**
   * o middleware interrompe a request 
   * se o token for invalido e chama next --
   * proxima request -- se o token for valido
   * ==> Chamar next sem ter outras rotas plugadas
   * resulta em 404 (sem throw de erro)
   */
  app.get('/', [AuthMiddleware], (req, res) => {
    res.status(200).send('AUTHENTICATED ROUTE')
  })

  test('Req sem Token', done => {
    supertest(app)
      .get('/')
      .then(res => {
        expect(res.status).toBe(403)
        expect(res.text).toBe('Missing Authorization Header')
        done()
      })
  })

  test('Req com Token', done => {

    const token = 'Bearer ' + GenerateAuthToken({uid: v4()})

    supertest(app)
      .get('/')
      .set('Authorization', token)
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.text).toBe('AUTHENTICATED ROUTE')
        done()
      })
  })
})