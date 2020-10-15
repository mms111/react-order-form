import orderTypes from '../actionTypes/orderTypes'

const setCustomerName = (name) => {
    return(
        {
            type: orderTypes.SET_CUSTOMER_NAME,
            payload: name
        }
    )
}

const setCategory = (category) =>
{
    return(
        {
            type: orderTypes.SET_CATEGORY,
            payload: category
        }
    )
}

const setItem = (item) =>
{
    return(
        {
            type: orderTypes.SET_ITEM,
            payload: item
        }
    )
}

const resetItem = () =>
{
    return(
        {
            type: orderTypes.RESEST_ITEM,
            payload: {
                name: "",
                type: "",
                price: 0
            }
        }
    )
}

const addItem = (item) =>
{
    return(
        {
            type: orderTypes.ADD_ITEM,
            payload: item
        }
    )
}

const resetOrder = () =>
{
    return(
        {
            type: orderTypes.RESET_ORDER
        }
    )
}

const placeOrder = () =>
{
    return(
        {
            type: orderTypes.PLACE_ORDER,
        }
    )
}

export {setCustomerName, setCategory, setItem, resetItem, addItem, resetOrder, placeOrder}