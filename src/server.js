import { Router } from './router/router'
import { GetENV } from './utils/env'

const PORT = GetENV('PORT') || 8080
Router.listen(PORT, () => {
  console.log(`HTTP LISTENING ON ${PORT}`)
})