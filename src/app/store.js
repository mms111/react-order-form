import customerReducer from './reducers/customerReducer'
import orderReducer from './reducers/orderReducer'
import {createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
    customerReducer,
    orderReducer
})

const store = createStore(rootReducer);

export default store;

