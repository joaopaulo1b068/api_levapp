import { Router } from 'express'
import { ShopController } from '../controllers/shop'
import { AuthMiddleware as Auth } from '../middlewares/auth'

const app = Router()

app.post('/', ShopController.create )

app.post('/login', ShopController.login )
app.get('/confirm/:email', ShopController.confirmEmail )

app.get('/', [Auth], async (req, res) => {
    res.status(501).send('GET ALL SHOPS')
})

app.get('/:id', async (req, res) => {
    res.status(501).send('GET SHOP BY UID')
})

app.put('/:id', async (req, res) => {
    res.status(501).send('UPDATE SHOP BY UID')
})

app.delete('/:id', async (req, res) => {
    res.status(501).send('DELETE SHOP BY UID')
})

export const ShopRouter = app