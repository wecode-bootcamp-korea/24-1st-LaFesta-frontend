import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 1,
    };
  }

  handleChange = event => this.setState({ selectValue: event.target.value });

  deleteList = () => {
    this.props.deleteList(this.props.id);
  };

  render() {
    const { productName, price, quantity } = this.props;
    const { selectValue } = this.state;

    console.log(this.props.id);

    return (
      <ul className="cartList">
        <li className="cartProduct">
          <div className="cartProductPic">
            <img
              alt="cartProductPic"
              src="https://i.postimg.cc/HkFkNGLv/1-main.jpg"
            />
          </div>
          <div className="cartProductOpt">
            <span>{productName}</span>
            <span>{(price * selectValue).toLocaleString('en')}원</span>
            <select
              className="productQuantity"
              selected={quantity}
              onChange={this.handleChange}
            >
              <option value="0">0</option>
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="productRemove" onClick={this.deleteList}>
            <span>
              <i class="fas fa-times"></i>
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default CartList;
