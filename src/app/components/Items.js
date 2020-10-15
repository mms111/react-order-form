import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setItem, addItem} from '../actionCreators/orderActions'



function Items({items, category}) {

    const selectedItem = useSelector(state => state.orderReducer.selectedItem)
    const disptach = useDispatch()
    const selectedCategoryItems = [];

    items.filter(
        item => item.type===category).map(
        filteredItem => selectedCategoryItems.push(filteredItem)
    )

    const handleEvent = (event) =>
    {
        const selectedItem = items.find(item => item.name === event.target.value);
        disptach(setItem(selectedItem))
    }

    const addItemInCart = () =>
    {
        selectedItem.name==="" ? 
        alert('Please select an item first') :
        disptach(addItem(selectedItem))
    }

    return(

        <>
            <select className="items" value={selectedItem.name} onChange={(event)=>handleEvent(event)}>
                <optgroup label={category}>
                {
                    selectedItem.name==="" ? 
                    <option>Select Item</option> : 
                    <option disabled>Select Item</option>
                }
                {selectedCategoryItems.map((item, index)=>
                (<option key={index} value={item.name} >{item.name + " - Rs." + item.price}</option>
                ))}
                </optgroup>
            </select>
            <button className="add-button" type="button" onClick={()=>addItemInCart()}><b>Add</b></button>
        </>
    )
}

export default Items