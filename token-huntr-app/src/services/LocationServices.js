import TokenHuntr from ".";

export const GetLocations = async () => {
    try {
        const res = await TokenHuntr.get('/locations')
        console.log(res, 'getting locations')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetLocationDetails = async (id) => {
    try {
        const res = await TokenHuntr.get(`/locations/${id}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}