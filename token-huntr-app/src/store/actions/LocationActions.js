import { getLocations } from "../../services/LocationServices";
import { GET_LOCATIONS, ADD_LOCATION } from "../types";

export const LoadLocations = () => {
    return async (dispatch) => {
        try {
            const locations = await getLocations()

            dispatch({
                type: GET_LOCATIONS,
                payload: locations
            })
        } catch (error) {
            throw error
        }
    }
}

export const AddLocation = (location) => ({
    type: ADD_LOCATION,
    payload: location
})