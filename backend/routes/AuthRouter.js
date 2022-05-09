const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/login', controller.Login)


module.exports = Router