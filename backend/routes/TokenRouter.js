const Router = require('express').Router()
const controller = require('../controllers/TokenController')

Router.get('/', controller.GetToken)

module.exports = Router