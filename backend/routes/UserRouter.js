const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUser)

module.exports = Router