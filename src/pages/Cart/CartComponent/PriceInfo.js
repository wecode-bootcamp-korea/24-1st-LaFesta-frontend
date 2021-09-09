import React, { Component } from 'react';
import './PriceInfo.scss';

class PriceInfo extends Component {
  render() {
    const { totalQuantity } = this.props;
    return (
      <aside className="priceInfo">
        <div className="eachProduct">
          <span>{totalQuantity}개 상품</span>
          <span>원</span>
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
          <span>원</span>
        </div>
        <div className="orderBtn">
          <div onClick={this.props.goToNextPage}>주문하기</div>
        </div>
        <div className="cardInfo">
          <i class="fab fa-cc-visa" />
          <i class="fab fa-cc-mastercard" />
          <i class="fab fa-cc-apple-pay" />
          <i class="fab fa-cc-amex" />
        </div>
      </aside>
    );
  }
}

export default PriceInfo;
