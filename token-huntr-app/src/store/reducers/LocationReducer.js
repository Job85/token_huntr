const { ADD_LOCATION, LOAD_LOCATION, GET_LOCATIONS, NEW_LOCATION, UPDATE_LOCATION, REMOVE_LOCATION } = require('../types')

const iState = {
    locations: [],
    newLocation: { latitude: '' },
    newLocation: { longitude: '' },
    newLocation: { level: '' },
    updateLocation: { latitude: '' },
    updateLocation: { longitude: '' },
    updateLocation: { level: '' },
    locationsLoading: ''
}

const LocationReducer = (state = iState, action) => {
    switch (action.type) {
        case LOAD_LOCATION:
            return { ...state, locationsLoading: action.payload }
        case GET_LOCATIONS:
            state.locations = new Array(...action.payload)
            return { ...state }
        case ADD_LOCATION:
            return {
                ...state, locations: [...state.locations, action.payload],
                newLocation: { ...state.newLocation, latitude: '', longitude: '', level: '' }
            }
        case NEW_LOCATION:
            return { ...state, newLocation: { ...state.newLocation, } }
        case UPDATE_LOCATION:
            return {
                ...state, locations: [...state.locations, action.payload],
                updateLocation: { ...state.updateLocation, latitude: '', longitude: '', level: '' }
            }
        case REMOVE_LOCATION:
            state.locations.splice(action.payload, 1)
        default:
            return { ...state }
    }
}

export default LocationReducer