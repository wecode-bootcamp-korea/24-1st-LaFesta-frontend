import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 1,
      optionValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  deleteList = () => {
    this.props.deleteList(this.props.id);
  };

  render() {
    const { productName, price } = this.props;
    const { selectValue, optionValue } = this.state;

    const handleChange = event =>
      this.setState({ selectValue: event.target.value });

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
            <select className="productQuantity" onChange={handleChange}>
              {optionValue.map(num => {
                return <option value={num}>{num}</option>;
              })}
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
