import React from 'react'
import ExistingCustomers from './ExistingCustomers'
import {customers, categories, items} from '../../data/mock_data'
import {useSelector, useDispatch} from 'react-redux'
import Menu from './Menu'
import OrderInfo from './OrderInfo'
import {resetOrder, placeOrder} from '../actionCreators/orderActions'

function OrderForm()
{
    const customer = useSelector(state => state.customerReducer.customer)
    const addedItems = useSelector(state => state.orderReducer.addedItems)
    const dispatch = useDispatch()

    const resetForm = () =>
    {
       if(window.confirm("Are you sure?"))
       {
           dispatch(resetOrder())
       }
    

    }

    const submitForm = () => 
    {
        const customerName = document.getElementById("name-field").value
        dispatch(placeOrder(customerName))
        alert("Thanks " + customerName + ". Your order has been placed successfully")
    }

    return(
        <>
            <div className="form-container">
                <div className="form">
                    <form>

                        {
                            customer==="EXISTING_CUSTOMER" ? 
                            <ExistingCustomers customersList={customers}/> :
                            <label><b>Full Name</b>
                                <br></br>
                                <input id="name-field" type="text" placeholder="Full Name" required></input>
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
                                    <button className="submit-button" type="button" onClick={() => submitForm() }>Place Order</button>
                                    <button className="reset-button" type="reset" onClick={()=>resetForm()}>Reset</button>
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