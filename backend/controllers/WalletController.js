const { Wallet } = require('../models')

const GetWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findAll()
        console.log(wallet)
        res.send(wallet)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetWallet,
}