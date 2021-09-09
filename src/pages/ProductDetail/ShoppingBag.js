import React, { Component } from 'react';
import './ShoppingBag.scss';

class ShoppingBag extends Component {
  render() {
    const { isShoppingBag, hideFilter, productInfo, gotoCart, size } =
      this.props;
    return (
      <div
        className="ShoppingBag"
        style={{
          transform: `translate3d(
            ${isShoppingBag ? 100 : 51}%, 0px, 0px`,
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
              src={productInfo.images?.[0].image_url}
            />
            <div className="productInfo">
              <div className="productName">{productInfo.name}</div>
              <div className="productSize">{size}</div>
              <div className="productColor">{productInfo.colors?.[0].name}</div>
              <div className="productPrice">
                {productInfo.price?.toLocaleString('en')}원
              </div>
            </div>
          </div>
          <div className="shoppingBasket">
            <button onClick={gotoCart}>장바구니 보기</button>
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
