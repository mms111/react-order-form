import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setCustomerName} from '../actionCreators/orderActions'

function ExistingCustomer({customersList})
{
    const customerName = useSelector(state => state.orderReducer.customerName)
    const dispatch = useDispatch()
    return(
        <>
            <label><b>Select Your Name</b></label>
            <br></br>
            <select value={customerName} onChange={(event) => dispatch(setCustomerName(event.target.value))} >

                {
                    customerName==="" ? 
                    <option>Select your name</option> :
                    <option disabled>Select your name</option>
                }
               
                {
                    customersList.map((customer, index)=>
                    (<option key={index} value={customer.name}>{customer.name}</option>)
                    )}

            </select>
        </>
    )
}

export default ExistingCustomer