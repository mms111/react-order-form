import React, { useState } from 'react'
import Items from './Items'

function Menu(props)
{
    const [cat, setCategory] = useState("Drink");
    
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
            <Items category={cat} itemsList={props.itemsList}/>
        </>
    )
}

export default Menu