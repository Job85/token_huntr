const { Token } = require('../models')

const GetToken = async (req, res) => {
    try {
        const token = await Token.findAll({
            attributes: ['locationId']
        })
        console.log(token)
        res.send(token)
    } catch (error) {
        throw error
    }
}

const MintToken = async (req, res) => {
    const locationId = parseInt(req.params.location_id)
    try {
        let forgeToken = {
            locationId,
            ...req.body
        }
        console.log(req.body)
        const produceToken = await Token.create(forgeToken)
        res.send(produceToken)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetToken,
    MintToken
}