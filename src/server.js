require('dotenv').config()
import { Router } from './router/router'

Router.listen(8000, () => {
  console.log('express listening on 8000')
})