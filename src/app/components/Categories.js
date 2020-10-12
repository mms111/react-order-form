import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory, resetItem} from '../actionCreators/orderActions'

function Categories({categories})
{
    const category = useSelector(state => state.orderReducer.selectedCategory)
    const dispatch = useDispatch()

    const handleEvent = (event) =>
    {
        dispatch(resetItem())
        dispatch(setCategory(event.target.value))
    }
    
    return(
        <>
            <select id="category" value={category} onChange={(event) => handleEvent(event)}>

                {
                    category==="" ? 
                    <option>Select Category</option> : 
                    <option disabled>Select Category</option>
                }

                {
                    categories.map((category, index)=>(
                    <option key={index} value={category}> {category} </option>
                ))}

            </select>
        </>
    )
}

export default Categories