import React from 'react'

function OrderInfo(props)
{
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
                            {props.selectedItemList.map((selectedItem, index)=>(
                                <tr key={index}>
                                    <td>{selectedItem.name}</td>
                                    <td>{selectedItem.quantity}</td>
                                    <td>{selectedItem.price * selectedItem.quantity}</td>
                                </tr>
                            ))}
                        <tr>
                            <td colSpan="2"><b>Total</b></td>
                            <td><b>{props.totalAmount}</b></td>
                        </tr>
                    </tbody>
                </table>      
            </div> 
        </>
    )
}

export default OrderInfo