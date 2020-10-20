import React from 'react'
import './orderPage.css'
import Header from '../../components/Header';
import OrderSlip from '../../components/orderSlip'

function OrderPage()
{
    return(
        <>
            <Header heading="Thankyou. Your order has been placed successfully."></Header>
            <br></br> 
            <br></br>
            <OrderSlip/>        
        </>
    )
}

export default OrderPage