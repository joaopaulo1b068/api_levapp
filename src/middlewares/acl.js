export function VerifyACL(role, req, res) {

  if (req.role !== role) {
    return res.status(403).send('ROLE REQUIRED: ', role)
  }

  return true

}