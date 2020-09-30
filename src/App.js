import React, {useState} from 'react';
import './App.css';
import {customers, categories, items} from './data/mock_data'
import ExistingCustomerForm from './components/ExistingCustomerForm'
import NewCustomerForm from './components/NewCustomerForm'

function App() {

  const [customer, setCustomer] = useState("New Customer");

  function setCustomerType(e)
  {
      setCustomer(e.target.value);
  }

  return (
    <>
    <div>
      <div className="header">
        <h1>Order Form</h1>
      </div>
      <br></br>
      <div className="customer-type">
        <input type="radio" name="customer" value="New Customer"  checked={customer==="New Customer"} onChange={(e)=>setCustomerType(e)} />
        <label><b>New Customer</b></label>
        <input  type="radio" name="customer" value="Existing Customer" checked={customer==="Existing Customer"} onChange={(e)=>setCustomerType(e)}/>
        <label><b>Existing Customer</b></label>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="form-container">
        {customer==="Existing Customer" ? 
          <ExistingCustomerForm customersList={customers} categoriesList={categories} itemsList={items} /> : 
          <NewCustomerForm categoriesList={categories} itemsList={items} />
        }
      </div>
    </div>
    </>
  );
}

export default App;
