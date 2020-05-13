import * as Yup from 'yup'
import { ShopTypesAllowed } from '../libs/shop-types'

import { v4 } from 'uuid'
import JWT from 'jsonwebtoken'
import { HashPass } from '../libs/password'
import moment from 'moment'
import { GetID } from '../libs/ids'
import { Shop } from '../models/shop'
import { GetENV } from '../utils/env'
import { CreateShopSchema } from '../validators/shop/shop'

async function create(req, res, next) {

  try {
    const form = CreateShopSchema.validateSync(req.body)
    
    const uuid = v4()
    const password = HashPass(form.password).encrypted
    const shop = await Shop.create({
      name: form.name,
      uid: uuid,
      email: form.email,
      password: password,
      created_at: moment().unix().toString(),
      deleted: false,
      reset_pass: GetID(6),
      email_confirmed: false,
      category: form.category
    })

    const jwt = JWT.sign({
      id: shop.uid,
      role: 'SHOP'
    }, GetENV('JWT_SECRET'), {
      expiresIn: 60*60*8, 
      algorithm: 'HS256'
    })
    
    res.send({
      email: shop.email,
      name: shop.name,
      token: jwt
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).send(err)
    }else {
      console.log(err)
      res.status(500).send(err)
    }
  }

}

export const ShopController = {
  create,
}