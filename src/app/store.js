import customerReducer from './reducers/customerReducer'
import orderReducer from './reducers/orderReducer'
import {createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    customerReducer,
    orderReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;

