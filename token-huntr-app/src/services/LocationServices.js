import TokenHuntr from ".";

export const getLocations = async () => {
    try {
        const res = await TokenHuntr.get('/locations')
        console.log(res, 'getting locations')
        return res.data
    } catch (error) {
        throw error
    }
}