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

const GetCacheById = async (req, res) => {
    let locationId = parseInt(req.params.locationId)
    try {
        const cache = await Location.findByPk(locationId, {
            where: { id: locationId },
            returning: true
        })
        console.log(cache)
        res.send(cache)
    } catch (error) {
        throw error
    }
}

const PostCache = async (req, res) => {
    console.log(req.params)
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
        console.log(error)
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
    GetCacheById,
    PostCache,
    UpdateCache,
    DeleteCache
}