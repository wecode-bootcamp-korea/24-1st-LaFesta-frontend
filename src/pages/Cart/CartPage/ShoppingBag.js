import React, { Component } from 'react';
import CartList from '../CartComponent/CartList';
import PriceInfo from '../CartComponent/PriceInfo';
import './ShoppingBag.scss';

class ShoppingBag extends Component {
  render() {
    const { cartListData } = this.props;

    return (
      <div className="cartFirstPage">
        <section className="purchaseInfo">
          {cartListData.map(data => {
            return (
              <CartList
                key={data.id}
                cartProductName={data.name}
                cartProductPrice={data.price}
              />
            );
          })}
          <div className="cartDiscount">
            <span>할인혜택(세일 및 쿠폰)</span>
            <span>사용 가능 포인트: 0원</span>
            <div>
              <input
                className="discountApply"
                placeholder="사용할 포인트 입력"
              ></input>
              <div className="applyBtn">적용</div>
            </div>
            <div>
              <input className="discountApply" placeholder="쿠폰 선택"></input>
              <div className="applyBtn">적용</div>
            </div>
            <div>
              <input
                className="discountApply"
                placeholder="쿠폰 번호를 입력하세요"
              ></input>
              <div className="applyBtn">적용</div>
            </div>
          </div>
          <div className="helpService">
            <span>도움이 필요하세요?</span>
            <span>고객센터가 도와드리겠습니다.</span>
            <span>1588-9619</span>
          </div>
        </section>
        <PriceInfo />
      </div>
    );
  }
}

export default ShoppingBag;
