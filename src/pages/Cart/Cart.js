import React, { Component } from 'react';
import './Cart.scss';

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
          <aside className="priceInfo">
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
            <div className="orderBtn">
              <div>주문하기</div>
            </div>
            <div className="cardInfo">
              <i class="fab fa-cc-visa"></i>
              <i class="fab fa-cc-mastercard"></i>
              <i class="fab fa-cc-apple-pay"></i>
              <i class="fab fa-cc-amex"></i>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Cart;
