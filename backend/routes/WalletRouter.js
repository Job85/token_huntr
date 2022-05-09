const Router = require('express').Router()
const controller = require('../controllers/WalletController')

Router.get('/', controller.GetWallet)
Router.get('/my_wallet/:user_id', controller.GetMyWallet)
Router.post('/build_wallet/:owner_id', controller.CreateWallet)


module.exports = Router