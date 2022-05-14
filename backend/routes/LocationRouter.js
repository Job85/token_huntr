const Router = require('express').Router()
const controller = require('../controllers/LocationController')

Router.get('/', controller.GetLocation)
Router.get('/:locationId', controller.GetCacheById)
Router.post('/create_cache/:userId', controller.PostCache)
Router.put('/update_cache/:locationId', controller.UpdateCache)
Router.delete('/delete_cache/:locationId', controller.DeleteCache)


module.exports = Router