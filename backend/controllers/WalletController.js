const { Wallet, Token } = require('../models')

const GetWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findAll({
            // attributes: ['ownerId']
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

const CreateWallet = async (req, res) => {
    const ownerId = parseInt(req.params.owner_id)
    try {
        let makeWallet = {
            ownerId,
            ...req.body
        }
        console.log(req.body)
        const createWallet = await Wallet.create(makeWallet)
        res.send(createWallet)
    } catch (error) {
        throw error
    }
}

const WalletTransaction = async (req, res) => {
    try {
        let walletId = parseInt(req.params.wallet_id)
        const transaction = await Wallet.update(req.body, {
            where: { id: walletId },
            returning: true
        })
        console.log(transaction)
        res.send(transaction)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetWallet,
    GetMyWallet,
    CreateWallet,
    WalletTransaction
}