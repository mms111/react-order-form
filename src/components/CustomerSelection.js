import React from 'react'

function CustomerSelection({customer, setCustomer})
{
    
    return(
        <>
            <div id="customer-type-container">
                <label id="radio">
                    <input 
                        type="radio" name="customer" value="New Customer"  
                        checked={customer==="New Customer"} 
                        onChange={(e)=>setCustomer(e.target.value)}
                    />
                    <b> New Customer</b>
                </label>

                <label>
                    <input  
                        type="radio" name="customer" value="Existing Customer" 
                        checked={customer==="Existing Customer"} 
                        onChange={(e)=>setCustomer(e.target.value)}  
                    />
                    <b> Existing Customer</b>
                </label>
            </div>
        </>
    )
}

export default CustomerSelection;
