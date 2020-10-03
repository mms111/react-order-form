import React from 'react'
import Categories from './Categories'
import Items from './Items'

function Menu(props)
{

    return(
        <>
            <Categories categories={props.categories} category={props.selectedCategory} setCategory={props.setSelectedCategory}/>
            <br></br>
            <br></br>
            <label><b>Please select your {props.selectedCategory.toLocaleLowerCase()} item</b></label>
            <br></br>
            <Items items={props.categoryItemsList} item={props.selectedItem} setItem={props.setSelectedItem} category={props.selectedCategory}/>
        </>
    )
}

export default Menu