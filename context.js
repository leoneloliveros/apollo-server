const { getUserById } = require('./user/user.service')
const { validateJwt } = require('./auth/auth.service')
async function context({ req }) {
  let token = null
  let currentUser = null

  if (req.headers?.authorization) {
    token = req.headers.authorization.split('Bearer ')[1]
  }

  if (token) {
    try {
      //validar el token
      const payload = await validateJwt(token)
      const user = await getUserById(payload.id)
      currentUser = user
      //buscar el usuario para entregarlo
    } catch(err) {
      console.log(err)
    }
  }


  return {
    currentUser
  }

}

module.exports = context