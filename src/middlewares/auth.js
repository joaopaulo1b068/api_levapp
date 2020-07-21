import jwt from 'jsonwebtoken'
import { GetENV } from '../utils/env'

export function AuthMiddleware(req, res, next) {

  const header = req.headers['authorization']
  if (!header) return res.status(403).send('Missing Authorization Header')

  const token = header.replace('Bearer ', '')
  jwt.verify(token, GetENV('JWT_SECRET'), (err, decoded) => {
    if (err) return res.status(403).send(err)
    req.uid = decoded.id
    req.role = decoded.role
  })

  next()
}

export function ShopACLMiddleware(req, res, next) {

  if (req.role !== 'SHOP') {
    res.status(403).send('Role required for this service: SHOP')
  } else {
    next()
  }
}