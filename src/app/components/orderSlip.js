import React from 'react'
import {useSelector} from 'react-redux'

function OrderSlip()
{
    const order = useSelector( state => state.orderReducer);
    return(
        <>
            <div className="orderSlip">
                <table>
                    <tr>
                        <th>Name</th>
                        <td colSpan="2">{order.customerName}</td>
                    </tr>
                    <tr>
                        <th colSpan="3">Your Order</th>
                    </tr>
                    <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                    </tr>
                    {order.addedItems.map((item, index)=>(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                    ))}
                    <tr>
                            <td colSpan="2"><b>Total</b></td>
                            <td><b>{order.totalAmount}</b></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default OrderSlip