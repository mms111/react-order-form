import React from 'react';

function ExistingCustomer(props)
{
    return(
        <>
        <label><b>Select Your Name</b></label>
        <br></br>
        <select>
            {props.customersList.map((customer, index)=>(<option key={index}>{customer.name}</option>))}
        </select>
        </>
    )
}

export default ExistingCustomer