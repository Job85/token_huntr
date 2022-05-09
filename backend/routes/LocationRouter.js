const Router = require('express').Router()
const controller = require('../controllers/LocationController')

Router.get('/', controller.GetLocation)
Router.post('/create_cache/:userId', controller.PostCache)
Router.put('/update_cache/:userId', controller.UpdateCache)


module.exports = Router