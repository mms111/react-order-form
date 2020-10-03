import React from 'react'

function Categories({categories, category, setCategory})
{
    return(

        <>
            <label><b>What would you like to order?</b></label>
            <br></br>
            <select value={category} onChange={(e) => setCategory(e)}>
                {
                    category==="" ? 
                    <option>Select Category</option> : 
                    <option disabled>Select Category</option>
                }
                {
                    categories.map((category, index)=>(
                    <option key={index} value={category} >{category}</option>
                ))}
            </select>
        </>
    )
}

export default Categories