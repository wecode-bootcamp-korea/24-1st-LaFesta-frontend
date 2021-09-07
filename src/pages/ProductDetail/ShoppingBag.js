import React, { Component } from 'react';
import './ShoppingBag.scss';

class ShoppingBag extends Component {
  render() {
    const { isShoppingBag, hideFilter, productInfoList } = this.props;
    return (
      <div
        className="ShoppingBag"
        style={{
          transform: `translate3d(
          ${isShoppingBag * 100}%, 0px, 0px`,
        }}
      >
        <div className="filterContainer">
          <div className="filterTitle">
            <div className="shoppingText">
              <i class="fas fa-check-circle"></i>선택하신 제품이 장바구니에
              추가되었습니다
            </div>
            <div className="closeBtn">
              <i
                onClick={hideFilter}
                data-category="1"
                className="fas fa-times"
              ></i>
            </div>
          </div>
          <div className="shoppingPhotoBox">
            <img
              alt="shoppingPhoto"
              className="shoppingPhoto"
              src={
                productInfoList.images && productInfoList.images[0].image_url
              }
            ></img>
            <div className="productInfo">
              <div className="productName">
                {productInfoList && productInfoList.name}
              </div>
              <div className="productSize">{this.props.size}</div>
              <div className="productColor">
                {productInfoList.colors && productInfoList.colors[0].name}
              </div>
              <div className="productPrice">
                {productInfoList.price &&
                  productInfoList.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </div>
            </div>
          </div>
          <div className="shoppingBasket">
            <button onClick={this.props.gotoCart}>장바구니 보기</button>
          </div>
          <div className="continueBtn">
            <button onClick={hideFilter}>계속 쇼핑하기</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ShoppingBag;
