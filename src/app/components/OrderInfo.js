import React from 'react'
import {useSelector} from 'react-redux'

function OrderInfo({addedItems})
{
    const totalAmount = useSelector(state => state.orderReducer.totalAmount)

    return(
        <>
            <div className="items-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                            {addedItems.map((item, index)=>(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                        <tr>
                            <td colSpan="2"><b>Total</b></td>
                            <td><b>{totalAmount}</b></td>
                        </tr>
                    </tbody>
                </table>      
            </div> 
        </>
    )
}

export default OrderInfo