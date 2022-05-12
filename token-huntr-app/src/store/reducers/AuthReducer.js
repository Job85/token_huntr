import { AUTHENTICATED, NOT_AUTHENTICATED } from '../types'

const iState = {
    authChecked: false,
    loggedIn: false,
    currentUser: {}
};

const AuthReducer = (state = iState, action) => {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: true,
                currentUser: action.payload,
            };
        case NOT_AUTHENTICATED:
            return {
                authChecked: true,
                loggedIn: false,
                currentUser: {}
            };
        default:
            return state;
    }
}

export default AuthReducer