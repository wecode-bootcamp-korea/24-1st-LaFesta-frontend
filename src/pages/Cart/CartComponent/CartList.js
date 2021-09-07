import React, { Component } from 'react';

class CartList extends Component {
  render() {
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
            <span>(남성)프렌치 레귤러 반팔 폴로</span>
            <span>031, 사이즈: 004</span>
            <span>139,000 원</span>
            <select className="productQuantity">
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
          <div className="productRemove">
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
