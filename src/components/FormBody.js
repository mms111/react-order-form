import React, {useState} from 'react'
import CustomerSelection from './CustomerSelection'
import OrderForm from './OrderForm'

function FormBody()
{
    const [customer, setCustomer] = useState("New Customer");

    function changeCustomer(customerType)
    {
        setCustomer(customerType);
        
    }

    return(
        <>
            <div className="form-body">
                <CustomerSelection customer={customer} setCustomer={changeCustomer}/>
                <br></br>
                <hr></hr>
                <br></br>
                <OrderForm customer={customer}/>
            </div>
        </>
    )
}

export default FormBody