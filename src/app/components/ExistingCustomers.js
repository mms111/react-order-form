import React, {useState} from 'react';

function ExistingCustomer({customersList})
{
    const [customerName, setCustomerName] = useState("");

    return(
        <>
            <label><b>Select Your Name</b></label>
            <br></br>
            <select value={customerName} onChange={(e) => setCustomerName(e.target.value)} >

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