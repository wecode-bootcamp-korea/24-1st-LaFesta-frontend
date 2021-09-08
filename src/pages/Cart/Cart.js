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
      totalQuantity: 1,
      totalPrice: '',
      pageIndex: 1,
      gender: '',
      name: '',
      zipCode: '',
      address: '',
      detailAddress: '',
      mobile: '',
    };
  }

  componentDidMount() {
    fetch('./data/cartListData-doyoung.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartListData: res.result.products,
        });
      });
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToNextPage = () => {
    this.setState({ pageIndex: this.state.pageIndex + 1 });
  };

  deleteList = id => {
    const { cartListData } = this.state;
    const newCartListData = cartListData.filter(data => data.id !== id);
    this.setState({
      cartListData: newCartListData,
    });
  };

  render() {
    const { cartListData, totalQuantity, totalPrice } = this.state;
    const MAPPING_SIGNUP = {
      1: (
        <ShoppingBag
          cartListData={cartListData}
          goToNextPage={this.goToNextPage}
          deleteList={this.deleteList}
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
        />
      ),
      2: (
        <Delivery
          cartListData={cartListData}
          goToNextPage={this.goToNextPage}
          handleInput={this.handleInput}
          name={this.state.name}
        />
      ),
      3: (
        <Payment
          cartListData={cartListData}
          name={this.state.name}
          gender={this.state.gender}
          zipCode={this.state.zipCode}
          address={this.state.address}
          detailAddress={this.state.detailAddress}
          mobile={this.state.mobile}
        />
      ),
    };

    return (
      <div className="Cart">
        <header className="purchaseStep">
          <div>
            <span
              className="stepNum"
              style={{ backgroundColor: this.state.pageIndex > 0 && 'blue' }}
            >
              1
            </span>

            <span className="stepName">쇼핑백</span>
          </div>
          <div className="stepBar"></div>
          <div>
            <span
              className="stepNum"
              style={{ backgroundColor: this.state.pageIndex > 1 && 'blue' }}
            >
              2
            </span>
            <span className="stepName">배송</span>
          </div>
          <div className="stepBar"></div>
          <div>
            <span
              className="stepNum"
              style={{ backgroundColor: this.state.pageIndex > 2 && 'blue' }}
            >
              3
            </span>
            <span className="stepName">결제</span>
          </div>
        </header>
        {MAPPING_SIGNUP[this.state.pageIndex]}
      </div>
    );
  }
}

export default Cart;
