import React, {useState} from 'react'
import ExistingCustomers from './ExistingCustomers'
import Menu from './Menu'
import {customers, categories, items} from '../data/mock_data'
import OrderInfo from './OrderInfo'

let categoryItemsList = [];

function OrderForm({customer})
{
    let [selectedItems, setSelectedItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedItem, setSelectedItem] = useState("");
    const [isNameEmpty, setNameStatus] = useState(null);
    const [isSubmitted, setFormStatus] = useState(null);

    function changeCategory(e)
    {
        categoryItemsList = [];

        items.filter(
            item => item.type===e.target.value).map(
            filteredItem => categoryItemsList.push(filteredItem)
        )

        setSelectedCategory(e.target.value);
        setSelectedItem(categoryItemsList[0].name)
    }


    function addItem()
    {
        for(var i=0; i<items.length; i++)
        {
            var status=false;
            if(items[i].name===selectedItem)
            {
                for(var j=0; j<selectedItems.length; j++)
                {
                    if(selectedItems[j].name===selectedItem)
                    {
                        selectedItems[j].quantity=selectedItems[j].quantity+1;
                        setTotalAmount(totalAmount + selectedItems[j].price);
                        status=true;
                        break;
                    }
                }
                if(!status)
                {
                    selectedItems.push({ name : items[i].name,
                        quantity : 1,
                        price:  items[i].price});

                    setTotalAmount(totalAmount + items[i].price);
                }
            }
        }
        setSelectedItems(selectedItems);
    }

    function reSet()
    {
        selectedItems = [];
        setSelectedItems(selectedItems);
        setTotalAmount(0);
        setSelectedCategory("")
        setSelectedItem("")
        setFormStatus(false);
    }

    const submit = () => {

        if(customer==="New Customer")
        {
            if(document.getElementById("name-field").value==="")
            {
                setNameStatus(true);
            }

            else if(selectedItems.length<=0)
            {
                alert("Please add your item in cart")
            }

            else
            {
                customers.push({
                    name: document.getElementById("name-field").value
                })

                setFormStatus(true);
            }
        }
       
        else if(selectedItems.length<=0)
        {
            alert("Please add your item in cart")
        }

        else{
            setFormStatus(true);
        }
        
        
    }

    const validateField = (e) =>
    {
        if(e.target.value!=="")
        {
            setNameStatus(false);
        }
    }

    return(
        <>
            { isSubmitted ? <h1 style={{color:"red", textAlign:"center"}}>Thanks for ordering</h1> : <></>}
            <div className="form-container">
                <div className="form">
                    <form>
                        {
                            customer==="Existing Customer" ? 
                            <ExistingCustomers customersList={customers}/> :
                            <label><b>Full Name</b>
                                <br></br>
                                <input id="name-field" type="text" placeholder="Full Name" onChange={validateField}></input>
                            </label>
                        }
                        {customer==="New Customer" ? (isNameEmpty ? <p style={{color:"red"}}><b>*Please enter your name</b></p> : <br></br>) : <br></br>}
                        <br></br>
                        
                        <Menu 

                            selectedCategory={selectedCategory}  setSelectedCategory={changeCategory} categories={categories}
                            selectedItem={selectedItem} setSelectedItem={setSelectedItem} categoryItemsList={categoryItemsList}
                        
                        />
                        <button className="add-button" type="button" onClick={addItem}><b>Add</b></button>
                        <br></br>
                        <br></br>
                        <OrderInfo selectedItemList={selectedItems} totalAmount={totalAmount}/>
                        <br></br>
                        <br></br>
                        <div className="button-container">
                        <button className="submit-button" type="button" onClick={submit}>Place Order</button>
                        <button className="reset-button" type="reset" onClick={reSet}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default OrderForm;