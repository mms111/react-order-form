import customerTypes from '../actionTypes/customerTypes'

const setCustomer = (customer) => {
    return({
        type: customerTypes.SET_CUSTOMER,
        payload: customer
    })
}

export {setCustomer}