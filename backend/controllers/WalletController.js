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
        const wallet = await Wallet.findAll({
            attributes: ['ownerId'],
            // include: [{
            //     model: Token,
            //     as: 'token',
            //     through: { attributes: [] },
            //     attributes: ['id', 'code']
            // where: {
            //     userd: req.params.user_id
            // }
            // }],
        })
        console.log(wallet)
        res.send(wallet)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetWallet,
    GetMyWallet,
}