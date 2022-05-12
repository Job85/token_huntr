import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import LocationReducer from './reducers/LocationReducer';
import AuthReducer from './reducers/AuthReducer';
// import { registerUser, loginUser, logoutUser, checkAuth } from './actions/AuthActions';

const store = createStore(
    combineReducers({
        authState: AuthReducer,
        locationsState: LocationReducer,
    }), composeWithDevTools())

export default store