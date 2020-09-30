import React from 'react'
import Menu from './Menu'

function NewCustomerForm(props)
{
    return(
        <>
            <div className="form">
                <form>
                    <label><b>Full Name</b>
                    <br></br>
                    <input type="text" placeholder="Full Name"></input></label>
                    <br></br>
                    <br></br>
                    <Menu categoriesList={props.categoriesList} itemsList={props.itemsList}/>
                    <br></br>
                    <br></br>
                    <div className="button-container">
                    <button className="submit-button" type="submit">Place Order</button>
                    <button className="reset-button" type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewCustomerForm;