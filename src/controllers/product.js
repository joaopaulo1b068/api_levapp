import { ControllerErr } from "../middlewares/controller-err"
import { VerifyACL } from "../middlewares/acl"

async function create(req, res, next) {
  try {

    VerifyACL('SHOP', req, res)

    return res.status(202).send('OK')

  } catch (err) {
    return ControllerErr(err, res)
  }

}

export const ProductController = {
  create
}