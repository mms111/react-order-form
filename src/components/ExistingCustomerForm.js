import React from 'react'
import ExistingCustomers from './ExistingCustomers'
import Menu from './Menu'

function ExistingCustomerForm(props)
{
    return(
        <>
            <div className="form">
                <form>
                    <ExistingCustomers customersList={props.customersList}/>
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

export default ExistingCustomerForm;