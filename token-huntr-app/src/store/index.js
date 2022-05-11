import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import LocationReducer from './reducers/LocationReducer';
import AuthorizationReducer from './reducers/AuthorizationReducer';
import { registerUser, loginUser, logoutUser, checkAuth } from './actions/AuthActions';

const store = createStore(
    combineReducers({
        authorizationState: AuthorizationReducer,
        locationsState: LocationReducer,
    }), composeWithDevTools())

export default store