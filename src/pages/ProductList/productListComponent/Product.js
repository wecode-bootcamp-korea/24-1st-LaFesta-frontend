import React, { Component } from 'react';

class Product extends Component {
  render() {
    const {
      productName,
      productColors,
      productPrice,
      productPic,
      productPicReverse,
    } = this.props;

    return (
      <div className="product">
        <img className="productPic" alt="productPicture" src={productPic} />
        <img
          className="productPicReverse"
          alt="productPictureReversed"
          src={productPicReverse}
        />
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
