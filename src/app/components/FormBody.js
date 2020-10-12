import React from 'react'
import CustomerSelection from './CustomerSelection'
import OrderForm from './OrderForm'

function FormBody()
{

    return(
        <>
            <div className="form-body">
                <CustomerSelection/>
                <br></br>
                <hr></hr>
                <br></br>
                <OrderForm/>
            </div>
        </>
    )
}

export default FormBody