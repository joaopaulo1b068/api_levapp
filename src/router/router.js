import express from 'express'
import { Deliverer } from '../models/deliverer'

const app = express()

const DelivererRouter = express.Router()

DelivererRouter.get('/:id', async (req, res) => {
    const entrega = await Deliverer.create({email: 'testehetero@email.com'})
    res.status(202).send('DELIVERER')
})

app.use('/deliverer', DelivererRouter)

export const Router = app