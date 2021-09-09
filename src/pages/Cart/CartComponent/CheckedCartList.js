import React, { Component } from 'react';
import './CheckedCartList.scss';

class CheckedCartList extends Component {
  render() {
    const { checkedProductName, checkedProductPrice } = this.props;
    return (
      <div>
        <ul className="checkedCartList">
          <li className="checkedProduct">
            <div className="checkedProductPic">
              <img
                alt="cartProductPic"
                src="https://i.postimg.cc/HkFkNGLv/1-main.jpg
                "
              />
            </div>
            <div className="checkedProductOpt">
              <p>{checkedProductName}</p>
              <p>
                <span>{checkedProductPrice.toLocaleString('en')}원</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CheckedCartList;
