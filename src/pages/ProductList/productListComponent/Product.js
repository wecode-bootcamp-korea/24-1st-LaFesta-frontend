import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { productName, productColors, productPic, productPrice } = this.props;
    return (
      <div className="product">
        <img className="productPic" alt="productPicture" src={productPic} />
        <div className="productInfo">
          <div className="colors">+ {productColors} clours</div>
          <div className="productName">{productName}</div>
          <div className="price">
            {productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
