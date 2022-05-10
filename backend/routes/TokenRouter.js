const Router = require('express').Router()
const controller = require('../controllers/TokenController')

Router.get('/', controller.GetToken)
Router.post('/mint_token/:location_id', controller.MintToken)

module.exports = Router