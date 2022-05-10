import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import LocationReducer from './reducers/LocationReducer'

const store = createStore(LocationReducer, composeWithDevTools())

export default store