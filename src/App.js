import React from 'react';
import './App.css';
import {customers, categories, items} from './data/mock_data'
import CustomerSelection from './components/CustomerSelection'

function App() {

 

  return (
    <>
    <div>
      <div className="header">
        <h1>Order Form</h1>
      </div>
      <br></br>
      <CustomerSelection customersList={customers} categoriesList={categories} itemsList={items}/>
    </div>
    </>
  );
}

export default App;
