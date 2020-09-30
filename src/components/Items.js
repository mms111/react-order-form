import React, {useState} from 'react'

const selectedItems = [];

function Items(props)
{
    const items = [];
    const [item, setItem] = useState("Apple Juice");
    const [selectedItemList, setSelectedItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    for(var i=0; i<props.itemsList.length; i++)
    {
        if(props.itemsList[i].type===props.category)
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
        <div className="items-class">
            <select className="items" value={item} onChange={(e)=>setItem(e.target.value)}>
                <optgroup label={props.category}>
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
        <div className="items-table">
            <table>
                <tbody>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    {selectedItemList.map((selectedItem, index)=>(
                        <tr key={index}>
                            <td>{selectedItem.name}</td>
                            <td>{selectedItem.quantity}</td>
                            <td>{selectedItem.price * selectedItem.quantity}</td>
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

export default Items;