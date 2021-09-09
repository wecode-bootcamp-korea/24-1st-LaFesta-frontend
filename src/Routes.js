import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import MainPage from './pages/MainPage/MainPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import SignUp from './pages/SignUp/SignUp';
// import SignUpCertification from './pages/SignUp/SignUpCertification';
// import SignUpUserInfo from './pages/SignUp/SignUpUserInfo';
import NotFound from './pages/Error/NotFound';
import Login from './pages/LogIn/Login';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/productDetail" component={ProductDetail} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logIn" component={Login} />
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
