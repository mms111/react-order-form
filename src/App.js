import React from 'react';
import './App.css';
import Header from './components/Header';
import FormBody from './components/FormBody';

function App() {

  return (
    <>
    <div className="App">
      <Header heading="Order Form" />
      <br></br>
      <FormBody/>
    </div>
    </>
  );
}

export default App;
