import customerTypes from '../actionTypes/customerTypes'

const initialState = {
    customer: "NEW_CUSTOMER"
}

export default function customerReducer(state=initialState, action) {

    switch(action.type)
    {
        case customerTypes.SET_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            }
        default :
            return state;
    }

}