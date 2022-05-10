const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.put('/update/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdatePassword
)
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJEZW1vQGVtYWlsLmNvbSIsImlhdCI6MTY1MjE0NTIwM30.Ec3lRlfqVR_gMOyCB6gtk8EqlagZD0Z4nuSGL7MhQ5M"


module.exports = Router