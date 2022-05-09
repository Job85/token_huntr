const { Wallet, Token } = require('../models')

const GetWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findAll({
            attributes: ['ownerId']
        })
        console.log(wallet)
        res.send(wallet)
    } catch (error) {
        throw error
    }
}
const GetMyWallet = async (req, res) => {
    try {
        const myWallet = await Wallet.findAll({
            attributes: ['ownerId'],
            where: {
                ownerId: req.params.user_id
            }
        })
        console.log(myWallet)
        res.send(myWallet)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetWallet,
    GetMyWallet,
}