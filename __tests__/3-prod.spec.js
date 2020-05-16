import request from 'supertest'
import express from 'express'
import { ProductRouter } from '../src/router/product'

describe('Cadastro de Produto', () => {

    const app = express()
    app.use('/', ProductRouter)

    test('Sem Autenticação', async (done) => {
        const route = await request(app).post('/')
        expect(route.status).toBe(403)
        expect(route.text).toBe('Missing Authorization Header')
        done()
    })

})
