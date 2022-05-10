const { LOAD_LOCATION, GET_LOCATIONS } = require('../types')

const iState = {
    locations: [],
    locationsLoading: ''
}

const LocationReducer = (state = iState, action) => {
    switch (action.type) {
        case LOAD_LOCATION:
            return { ...state, locationsLoading: action.payload }
        case GET_LOCATIONS:
            state.locations = new Array(...action.payload)
            return { ...state }
        default:
            return { ...state }
    }
}

export default LocationReducer