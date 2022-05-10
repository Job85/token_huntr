import { getLocations } from "../../services/LocationServices";
import { GET_LOCATIONS } from "../types";

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