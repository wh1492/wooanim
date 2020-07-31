import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/common/Header'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import ProductPage from './components/ProductPage'
// import logo from './logo.svg';

import './App.css';


class App extends Component {
  render(){
    return(
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:slug" component={ProductPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard/:userName" component={Dashboard} />
        </Fragment>
      </Router>
    )
  }
}

export default App;
