import orderTypes from '../actionTypes/orderTypes'
import {customers} from '../../data/mock_data'

const initialState = {
    selectedCategory: "",
    selectedItem: {
        name: "",
        type: "",
        price: 0
    },
    addedItems: [],
    totalAmount:0
}

export default function orderReducer(state=initialState, action) {

    switch(action.type)
    {
        case orderTypes.SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }

        case orderTypes.SET_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            }
        
        case orderTypes.RESEST_ITEM:

            return {
                ...state,
                selectedItem: action.payload
            }

        case orderTypes.ADD_ITEM:

            const existingItem = state.addedItems.find(item => (
                item.name===action.payload.name ? 
                [
                    item.quantity=item.quantity+1,
                    item.price=item.quantity*action.payload.price
                ] : 
                undefined
            ))
            
            return(
                 existingItem !== undefined ?
                    {
                        ...state,
                        addedItems:[...state.addedItems],
                        totalAmount: state.totalAmount+action.payload.price
                    } : 
                    {
                        ...state,
                        addedItems: [...state.addedItems, {
                            name: action.payload.name,
                            quantity: 1,
                            price: action.payload.price
                        }],
                        totalAmount: state.totalAmount+action.payload.price
                    }
                )

        case orderTypes.RESET_ORDER:
            return initialState
        
        case orderTypes.PLACE_ORDER:
            customers.push(
                {
                    name: action.payload
                }
            )
            return initialState

        default :
            return state;
    }

}