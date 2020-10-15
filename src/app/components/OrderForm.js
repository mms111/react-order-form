import React from 'react'
import ExistingCustomers from './ExistingCustomers'
import {customers, categories, items} from '../../data/mock_data'
import {useSelector, useDispatch} from 'react-redux'
import Menu from './Menu'
import OrderInfo from './OrderInfo'
import {setCustomerName, resetOrder, placeOrder} from '../actionCreators/orderActions'

function OrderForm()
{
    const customerName = useSelector(state=> state.orderReducer.customerName);
    const customer = useSelector(state => state.customerReducer.customer)
    const addedItems = useSelector(state => state.orderReducer.addedItems)
    const dispatch = useDispatch()
    

    const resetForm = (event) =>
    {
        window.confirm("Are you sure?") ? dispatch(resetOrder()) : event.preventDefault()
    }

    const submitForm = (event) => 
    {
        event.preventDefault()
        
        if(customerName==="")
        {
            return alert("Please select your name")
        }
        
        alert("Thanks " + customerName + ". Your order has been placed successfully")
        dispatch(placeOrder())
    }

    return(
        <>
            <div className="form-container">
                <div className="form">
                    <form  onSubmit={submitForm}>

                        {
                            customer==="EXISTING_CUSTOMER" ? 
                            <ExistingCustomers customersList={customers}/> :
                            <label><b>Full Name</b>
                                <br></br>
                                <input id="name-field" type="text" placeholder="Full Name" 
                                    value={customerName} onChange={(event) => dispatch(setCustomerName(event.target.value))} 
                                    required>
                                </input>
                            </label>
                        }

                        <br></br>
                        <br></br>
                        <Menu categories={categories} items={items}/>
                        <br></br>
                        <br></br>

                        {
                            addedItems.length > 0 ?
                            <>
                                <OrderInfo addedItems={addedItems}/>
                                <br></br>
                                <br></br>
                                <div className="button-container">
                                    <button className="submit-button" type="submit">Place Order</button>
                                    <button className="reset-button" type="reset" onClick={resetForm}>Reset</button>
                                </div>
                            </> :
                            <></>
                        }
                        

                    </form>
                </div>
            </div>
        </>
    )
}

export default OrderForm;