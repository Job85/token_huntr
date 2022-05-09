const Router = require('express').Router()
const controller = require('../controllers/LocationController')

Router.get('/', controller.GetLocation)
Router.post('/create_cache:userId', controller.PostCache)


module.exports = Router