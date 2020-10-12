import React from 'react'
import Categories from './Categories'
import Items from './Items'
import {useSelector} from 'react-redux'

function Menu({categories, items})
{
    const category = useSelector(state => state.orderReducer.selectedCategory);

    return(
        <>
            <label><b>What would you like to order?</b></label>
            <br></br>
            <Categories categories={categories}/>
            <br></br>
            <br></br>
            { category==="" ? 
                <> </> :   
                <label>
                    <b>Please select your {category.toLocaleLowerCase()} item</b>
                    <Items items={items} category={category}/>
                </label>
            }
            
        </>
    )
}

export default Menu