import React, { useState } from 'react'
import OrderInfo from './OrderInfo'

const selectedItems = [];

function Menu(props)
{
    const [cat, setCategory] = useState("Drink");
    const items = [];
    const [item, setItem] = useState("Apple Juice");
    const [selectedItemList, setSelectedItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    for(var i=0; i<props.itemsList.length; i++)
    {
        if(props.itemsList[i].type===cat)
        {
            items.push(props.itemsList[i]);
        }
        
    }


    function addItem()
    {
        for(var i=0; i<props.itemsList.length; i++)
        {
            var status=false;
            if(props.itemsList[i].name===item)
            {
                for(var j=0; j<selectedItems.length; j++)
                {
                    if(selectedItems[j].name===item)
                    {
                        selectedItems[j].quantity=selectedItems[j].quantity+1;
                        setTotalAmount(totalAmount + selectedItems[j].price);
                        status=true;
                        break;
                    }
                }
                if(!status)
                {
                    selectedItems.push({ name : props.itemsList[i].name,
                        quantity : 1,
                        price:  props.itemsList[i].price});

                    setTotalAmount(totalAmount + props.itemsList[i].price);
                }
            }
        }
        setSelectedItems(selectedItems);
    }
    
    return(
        <>
            <label><b>What would you like to order?</b></label>
            <br></br>
            <select value={cat} onChange={(e) => setCategory(e.target.value)}>
                {props.categoriesList.map((category, index)=>(<
                    option key={index} value={category} >{category}</option>
                    ))}
            </select>
            <br></br>
            <br></br>
            <label><b>Please select your {cat.toLocaleLowerCase()} item</b></label>
            <br></br>
            <div className="items-class">
                <select className="items" value={item} onChange={(e)=>setItem(e.target.value)}>
                    <optgroup label={cat}>
                    {items.map((itm, index)=>
                    (<option key={index} value={itm.name}>{itm.name + " - Rs." + itm.price}</option>
                    ))}
                    </optgroup>
                </select>
                <button className="button" type="button" onClick={addItem}><b>Add</b></button>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <OrderInfo selectedItemList={selectedItemList} totalAmount={totalAmount}/>
        </>
    )
}

export default Menu