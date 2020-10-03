import React from 'react'

function Items({items, item, setItem, category}) {

    return(

        <>
            <select className="items" value={item} onChange={(e)=>setItem(e.target.value)}>
                <optgroup label={category}>
                {
                    item==="" ? 
                    <option>Select Item</option> : 
                    <option disabled>Select Item</option>
                }
                {items.map((item, index)=>
                (<option key={index} value={item.name}>{item.name + " - Rs." + item.price}</option>
                ))}
                </optgroup>
            </select>
        </>
    )
}

export default Items