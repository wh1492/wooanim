import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Products from './components/Products'
import ProductPage from './components/ProductPage'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <Router>
        <Fragment>
          <Route exact path="/" component={Products} />
          <Route exact path="/product/:slug" component={ProductPage} />
        </Fragment>
      </Router>
    )
  }
}

export default App;
