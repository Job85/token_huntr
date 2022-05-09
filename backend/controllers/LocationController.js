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
        console.log(req.body)
        const createCache = await Location.create(buildCache)
        res.send(createCache)
    } catch (error) {
        throw error
    }
}

const UpdateCache = async (req, res) => {
    try {
        let locationId = parseInt(req.params.postId)
        const updateCache = await Location.update(req.body, {
            where: { id: locationId },
            returning: true
        })
        console.log(updateCache)
        res.send(updateCache)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetLocation,
    PostCache,
    UpdateCache
}