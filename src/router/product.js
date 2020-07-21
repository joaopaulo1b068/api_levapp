import { Router } from 'express'
import { 
    AuthMiddleware as Auth, 
    ShopACLMiddleware as ShopACL 
} from '../middlewares/auth'
import { ProductController } from '../controllers/product'

const app = Router()

app.post('/', [Auth, ShopACL], ProductController.create )

app.get('/', async (req, res) => {
    res.status(501).send('GET ALL PRODUCTS')
})

app.get('/:id', async (req, res) => {
    res.status(501).send('GET PRODUCT BY UID')
})

app.put('/:id', async (req, res) => {
    res.status(501).send('UPDATE PRODUCT BY UID')
})

app.delete('/:id', async (req, res) => {
    res.status(501).send('DELETE PRODUCT BY UID')
})

export const ProductRouter = app