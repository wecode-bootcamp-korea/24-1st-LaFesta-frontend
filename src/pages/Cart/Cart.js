import React, { Component } from 'react';
import CartList from './CartComponent/CartList';
import PriceInfo from './CartComponent/PriceInfo';
import './Cart.scss';
import './CartComponent/CartList.scss';
import './CartComponent/PriceInfo.scss';

class Cart extends Component {
  render() {
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
        <div className="purchaseFirstStep">
          <section className="purchaseInfo">
            <CartList />
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
                <input
                  className="discountApply"
                  placeholder="쿠폰 선택"
                ></input>
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
      </div>
    );
  }
}

export default Cart;
