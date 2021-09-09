import React, { Component } from 'react';
import CheckedCartList from './CheckedCartList';
import './CheckedPriceInfo.scss';

class CheckedPriceInfo extends Component {
  render() {
    const {
      cartListData,
      name,
      gender,
      zipCode,
      address,
      detailAddress,
      mobile,
    } = this.props;

    return (
      <aside className="checkedInfo">
        {cartListData.map(cartList => {
          return (
            <CheckedCartList
              key={cartList.id}
              checkedProductName={cartList.name}
              checkedProductPrice={cartList.price}
            />
          );
        })}
        <div className="checkedPriceInfo">
          <div className="eachProduct">
            <span>1개 상품</span>
            <span>139,000원</span>
          </div>
          <div className="postPrice">
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div className="productTax">
            <span>부가세 포함</span>
            <span>0원</span>
          </div>
          <div className="totalPrice">
            <span>총 결제금액</span>
            <span>139,000원</span>
          </div>
        </div>
        <div className="checkedAddress">
          <span>
            <i class="fas fa-truck"></i>
            일반배송
          </span>
          <span>
            {gender} {name}
          </span>
          {mobile}
          {zipCode}
          <span>{detailAddress}</span>
          <span>{address}</span>
        </div>
      </aside>
    );
  }
}

export default CheckedPriceInfo;
