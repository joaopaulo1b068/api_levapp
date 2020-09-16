import express from 'express'
import { ShopRouter } from './shop'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use('/shop', ShopRouter)

export const Router = app