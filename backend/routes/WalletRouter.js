const Router = require('express').Router()
const controller = require('../controllers/WalletController')

Router.get('/', controller.GetWallet)
Router.get('/my_wallet/:user_id', controller.GetMyWallet)


module.exports = Router