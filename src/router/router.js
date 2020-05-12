import express from 'express'
import { Deliverer } from '../models/deliverer'
import { Shop } from '../models/shop'
import { ShopRouter } from './shop'
import bodyParser from 'body-parser'

const app = express()

const DelivererRouter = express.Router()

DelivererRouter.get('/:id', async (req, res) => {
    const entrega = await Deliverer.create({email: 'testehetero@email.com'})
    res.status(202).send('DELIVERER')
})

app.use(bodyParser.json())
app.use('/deliverer', DelivererRouter)
app.use('/shop', ShopRouter)

export const Router = app