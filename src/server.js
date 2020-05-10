require('dotenv').config()
import { Router } from './router/router'

// Deliverer.create({email: 'emaildoentrega@email.com'})

Router.listen(8000, () => {
  console.log('express listening on 8000')
})