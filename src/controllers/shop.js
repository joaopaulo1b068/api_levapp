import * as Yup from 'yup'
import { ShopTypesAllowed } from '../libs/shop-types'

import { v4 } from 'uuid'
import JWT from 'jsonwebtoken'
import { HashPass, SplitPass } from '../libs/password'
import moment from 'moment'
import { GetID } from '../libs/ids'
import { GetENV } from '../utils/env'
import { CreateShopSchema, LoginShopSchema } from '../validators/shop/shop'
import { ControllerErr } from '../middlewares/controller-err'
import { GenerateAuthToken } from '../libs/tokens'
import { Database } from '../database/database'
import { ShopModel } from '../models/shop'
import { Sequelize } from 'sequelize'
import { DecodeBase64 } from '../libs/base64'

async function create(req, res, next) {

  try {
    const form = CreateShopSchema.validateSync(req.body)
    const uuid = v4()
    const password = HashPass(form.password).encrypted
    const shop = await ShopModel().create({
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

    const jwt = GenerateAuthToken({id: shop.uid, role: 'SHOP'})
    
    res.send({
      email: shop.email,
      name: shop.name,
      token: jwt
    })
  } catch (err) {

    return ControllerErr(err, res)

  }

}

async function confirmEmail (req, res) {

  try{

    const email = DecodeBase64(req.params.email)
    const sql = `UPDATE shop SET email_confirmed = true WHERE email = '${email}'`
    const update = await Database.query(sql)
    res.status(200).send(update)

  }catch(err){
    return ControllerErr(err, res)
  }

}

async function login (req, res) {
  try{

    const form = LoginShopSchema.validateSync(req.body)
    const sql = `SELECT * FROM shop WHERE email = '${form.email}' AND email_confirmed = true AND deleted = false`
    const [rows] = await Database.query(sql)
    if (!rows.length) return res.status(400).json({err: 'EMAIL_NOT_FOUND'})
    const shop = rows[0]
    const dbPass = SplitPass( shop.password )
    const informPass = HashPass(form.password, dbPass.salt).encrypted

    if (informPass === shop.password) {
      return res.status(200).json({
        name: shop.name,
        email: shop.email,
        token: GenerateAuthToken({id: shop.uid, role: 'SHOP'})
      })
    }else {
      return res.status(403).json({err: 'WRONG_PASS'})
    }

  }catch(err){
    return ControllerErr(err, res)
  }

}

export const ShopController = {
  create,
  login,
  confirmEmail
}