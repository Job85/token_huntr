const Router = require('express').Router()
const controller = require('../controllers/LocationController')

Router.get('/', controller.GetLocation)


module.exports = Router