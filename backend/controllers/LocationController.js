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
        let locationId = parseInt(req.params.locationId)
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

const DeleteCache = async (req, res) => {
    try {
        let id = parseInt(req.params.locationId)
        let userId = parseInt(req.params.userId)
        await Location.destroy({
            where: {
                id,
                userId
            }
        })
        res.send({ message: `Location ${id}, was deleted` })
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetLocation,
    PostCache,
    UpdateCache,
    DeleteCache
}