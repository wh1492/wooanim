import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/common/Header'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import ProductPage from './components/ProductPage'
import ListMyPosts from './components/admin/ListMyPosts'
import CreatePost from './components/admin/CreatePost'


// import logo from './logo.svg';

import './App.scss'
// import './tailwind.output.css';
/// import 'bootstrap';




class App extends Component {
  render() {

    //  const admin

    if (localStorage.getItem('token')) {
      console.log('habemus tolkien')
    } else {
      console.log('none so token')
    }
    return (
      <Router>
        <Fragment>
          <Header />
     
          <Route exact path="/" component={Homepage} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:slug" component={ProductPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard/:userName" component={Dashboard} />
          <Route exact path="/dashboard/myposts" component={ListMyPosts} />
          <Route exact path="/dashboard/createpost" component={CreatePost} />
        </Fragment>
      </Router>
    )
  }
}

export default App;
