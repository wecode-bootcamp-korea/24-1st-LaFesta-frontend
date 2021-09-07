import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import Cart from './pages/Cart/Cart';
import MainPage from './pages/MainPage/MainPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/LogIn/Login';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/mainPage" component={MainPage} />
          <Route exact path="/productDetail" component={ProductDetail} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logIn" component={Login} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
