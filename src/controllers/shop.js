import * as Yup from 'yup'
import { ShopTypesAllowed } from '../libs/shop-types'

const createSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  category: Yup.string().oneOf(ShopTypesAllowed).required()
})

async function create(req, res) {

  try {
    const formValid = createSchema.validateSync(req.body)
    res.send(formValid)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).send(err)
    }else {
      res.status(500).send(err)
    }
  }

}

export const ShopController = {
  create,
}