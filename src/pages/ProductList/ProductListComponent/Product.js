import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../ProductListComponent/Product.scss';
class Product extends Component {
  render() {
    const { productName, productColorNum, productPrice, productPic } =
      this.props;

    return (
      <div className="product">
        <Link to={`/productDetail/${this.props.itemId}`}>
          <img
            className="productPic"
            alt="productPicture"
            src={productPic[0] && productPic[0].image_url}
          />
          <img
            className="productPicReverse"
            alt="productPictureReversed"
            src={productPic[0] && productPic[1].image_url}
          />
          <div className="productInfo">
            <div className="colors">+ {productColorNum} clours</div>
            <div className="productName">{productName}</div>
            <div className="price">
              {Number(productPrice).toLocaleString('en')}원
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default Product;
