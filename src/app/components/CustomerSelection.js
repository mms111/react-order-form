import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCustomer} from '../actionCreators/customerAction'

function CustomerSelection()
{
    const customer = useSelector(state => state.customerReducer.customer)
    const disptach = useDispatch();

    return(
        <>
            <div id="customer-type-container">
                <label id="radio">
                    <input 
                        type="radio" name="customer" value="NEW_CUSTOMER"  
                        checked={customer==="NEW_CUSTOMER"} 
                        onChange={(e)=>disptach(setCustomer(e.target.value))}
                    />
                    <b> New Customer</b>
                </label>

                <label>
                    <input  
                        type="radio" name="customer" value={"EXISTING_CUSTOMER"} 
                        checked={customer==="EXISTING_CUSTOMER"} 
                        onChange={(e)=>disptach(setCustomer(e.target.value))}  
                    />
                    <b> Existing Customer</b>
                </label>
            </div>
        </>
    )
}

export default CustomerSelection;
