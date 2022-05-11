// import { GetLocations } from "../../services/LocationServices";
// import { GET_LOCATIONS, ADD_LOCATION, NEW_LOCATION, UPDATE_LOCATION, REMOVE_LOCATION } from "../types";

// export const LoadLocations = () => {
//     return async (dispatch) => {
//         try {
//             const locations = await GetLocations()
//             dispatch({
//                 type: GET_LOCATIONS,
//                 payload: locations
//             })
//         } catch (error) {
//             throw error
//         }
//     }
// }

// export const AddLocation = (location) => ({
//     type: ADD_LOCATION,
//     payload: location
// })

// export const CreateNewLocation = (formValue) => ({
//     type: NEW_LOCATION,
//     payload: formValue
// })

// export const UpdateLocation = (formValue) => ({
//     type: UPDATE_LOCATION,
//     payload: formValue
// })

// export const RemoveLocation = (index) => ({
//     type: REMOVE_LOCATION,
//     payload: index
// })