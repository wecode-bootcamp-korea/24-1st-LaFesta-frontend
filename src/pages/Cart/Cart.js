import React, { Component } from 'react';
import ShoppingBag from './CartPage/ShoppingBag';
import Delivery from './CartPage/Delivery';
import Payment from './CartPage/Payment';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartListData: [],
    };
  }

  componentDidMount() {
    fetch('./data/cartListData-doyoung.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartListData: res,
        });
      });
  }

  render() {
    const { cartListData } = this.state;

    return (
      <div className="Cart">
        <header className="purchaseStep">
          <div>
            <span className="stepNum">1</span>
            <span className="stepName">쇼핑백</span>
          </div>
          <div className="stepBar"></div>
          <div>
            <span className="stepNum">2</span>
            <span className="stepName">배송</span>
          </div>
          <div className="stepBar"></div>
          <div>
            <span className="stepNum">3</span>
            <span className="stepName">결제</span>
          </div>
        </header>
        <ShoppingBag cartListData={cartListData} />
        {/* <Delivery cartListData={cartListData} /> */}
        {/* <Payment cartListData={cartListData} /> */}
      </div>
    );
  }
}

export default Cart;
