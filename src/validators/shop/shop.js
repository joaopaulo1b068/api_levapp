import * as Yup from 'yup'
import { ShopTypesAllowed } from '../../libs/shop-types'

export const CreateShopSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  category: Yup.string().oneOf(ShopTypesAllowed).required()
})