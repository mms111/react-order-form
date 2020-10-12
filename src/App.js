import React from 'react';
import './App.css';
import Header from './app/components/Header';
import FormBody from './app/components/FormBody';
import {Provider} from "react-redux"
import store from './app/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Header heading="Order Form" />
          <br></br>
          <FormBody/>
        </div>
      </Provider>
    </>
  );
}

export default App;
