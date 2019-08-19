import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/partials/Header/Header'
import Shop from './components/pages/Shop/Shop'
import OrderReview from './components/pages/OrderReview/OrderReview'
import Inventory from './components/pages/Inventory/Inventory'
import PlaceOrder from './components/pages/Place-order/PlaceOrder'
import {connect} from 'react-redux'
import NotFound from './components/pages/NotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component{
  render() {
    return (
        <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Shop}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/review" component={OrderReview}></Route>
          <Route path="/manage" component={Inventory}></Route>
          <Route path="/place-order" component={PlaceOrder}></Route>
          <Route path="*" component={NotFound}></Route>
          </Switch>
      </Router>
        </div>
    )
  }
}


const mapStateToProps = state => {

  return state

}

export default connect(mapStateToProps)(App);
