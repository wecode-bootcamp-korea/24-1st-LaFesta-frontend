import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const {
      productName,
      productColorNum,
      productPrice,
      productPic,
      productPicReverse,
    } = this.props;

    return (
      <div className="product">
        <Link to={`/productDetail/${this.props.itemId}`}>
          <img className="productPic" alt="productPicture" src={productPic} />
          <img
            className="productPicReverse"
            alt="productPictureReversed"
            src={productPicReverse}
          />
          <div className="productInfo">
            <div className="colors">+ {productColorNum} clours</div>
            <div className="productName">{productName}</div>
            <div className="price">
              {productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Product;
