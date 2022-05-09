const { Location } = require('../models')

const GetLocation = async (req, res) => {
    try {
        const location = await Location.findAll()
        console.log(location)
        res.send(location)
    } catch (error) {
        throw error
    }
}

const PostCache = async (req, res) => {
    const userId = parseInt(req.params.userId)
    try {
        let buildCache = {
            userId,
            ...req.body
        }
        const createCache = await Location.create(buildCache)
        res.send(createCache)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetLocation,
    PostCache
}