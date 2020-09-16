import * as Yup from 'yup'

import { v4 } from 'uuid'
import moment from 'moment'
import { ControllerErr } from '../middlewares/controller-err'
import { Database } from '../database'
import { GetID } from '../libs/ids'
import { HashPass, SplitPass } from '../libs/password'
import { GenerateAuthToken } from '../libs/tokens'

async function save(form = {}) {

  return await Database('shop').insert({
    id: v4(),
    name: form.name,
    cnpj: form.cnpj,
    phone: form.phone,
    email: form.email,
    pass: HashPass(form.pass).encrypted,
    end_cep: form.end_cep,
    end_city: form.end_city,
    end_street: form.end_street,
    end_district: form.end_district,
    end_number: form.end_number,
    end_complement: form.end_complement,
    created_at: moment().unix().toString(),
    deleted: false,
    reset_pass_key: GetID(4),
    signup_token: v4(),
  })

}

async function create(req, res, next) {

  try {

    Yup.object().shape({
      name: Yup.string().required(),
      cnpj: Yup.string().required(),
      phone: Yup.string().required(),
      email: Yup.string().required(),
      pass: Yup.string().required(),
      end_uf: Yup.string().required(),
      end_city: Yup.string().required(),
      end_street: Yup.string().required(),
      end_cep: Yup.string().required(),
      end_district: Yup.string().required(),
      end_number: Yup.string().required(),
      end_complement: Yup.string().optional(),
    }).validateSync(req.body)

    const db = await save(req.body)
    res.status(200).json(req.body)

  } catch (err) {

    if (err.routine === '_bt_check_unique') {
      return res.status(400).json({ err: 'email already exist' })
    }

    return ControllerErr(err, res)
  }

}

export async function login(req, res, next) {
  try {

    Yup.object().shape({
      email: Yup.string().required(),
      pass: Yup.string().required()
    }).validateSync(req.body)

    const db = await Database
      .select('*')
      .from('shop')
      .where({
        email: req.body.email,
        deleted: false,
      })

    if (db.length < 1) {
      return res.status(400).json({ err: 'email not found' })
    }

    const db_shop = db[0]
    const db_pass = SplitPass(db_shop.pass)

    const verify_pass = HashPass(req.body.pass, db_pass.salt).hash

    if (db_pass.hash !== verify_pass) {
      return res.status(403).json({ err: 'wrong password', email: req.body.email })
    }

    const login_data = { id: db_shop.id, role: 'SHOP' }
    const jwt = GenerateAuthToken(login_data)

    res.status(200).json({ debug_data: login_data, token: jwt})

  } catch (err) {

    return ControllerErr(err, res)

  }
}

export const ShopController = {
  create,
  login,
}