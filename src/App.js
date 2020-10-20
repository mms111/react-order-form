import React from 'react';
import './App.css';
import HomePage from '../src/app/pages/homePage/homePage'
import {Provider} from "react-redux"
import store from './app/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import OrderPage from '../src/app/pages/orderPage/orderPage'

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/orderSlip" component={OrderPage}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
