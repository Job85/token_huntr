const { Wallet } = require('../models')

const GetMyWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findAll({
            attributes: ['ownerId'],
            include: [{
                model: Token,
                through: { attributes: [] },
                attributes: ['id', 'code']
            }],
            where: {
                id: req.params.ownerId
            }
        })
        console.log(wallet)
        res.send(wallet)
    } catch (error) {
        throw error
    }
}

// const GetMyWallet = async (req, res) => {
//     try {
//         const myWallet = await Wallet.findByPk()
//     } catch (error) {
//         throw error
//     }
// }

module.exports = {
    GetMyWallet,
}