const { Token } = require('../models')

const GetToken = async (req, res) => {
    try {
        const token = await Token.findAll()
        console.log(token)
        res.send(token)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetToken
}