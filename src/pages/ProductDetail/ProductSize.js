import React, { Component } from 'react';
import './ProductSize.scss';

class ProductSize extends Component {
  render() {
    const { isSize, productInfoList, hideFilter } = this.props;
    return (
      <div
        className="ProductSize"
        style={{
          transform: `translate3d(
          ${isSize * 100}%, 0px, 0px`,
        }}
      >
        <div className="filterContainer">
          <div className="filterTitle">
            <div className="sizeGuide">사이즈 가이드</div>
            <div className="closeBtn">
              <i
                onClick={hideFilter}
                data-category="1"
                className="fas fa-times"
              ></i>
            </div>
          </div>
          <div className="sizeContainer">
            <button
              className="sizeBox"
              onClick={() => {
                this.props.change('00' + productInfoList.sizes[0].size);
              }}
            >
              00
              {productInfoList.sizes && productInfoList.sizes[0].size}
            </button>
            <button
              className="sizeBox"
              onClick={() => {
                this.props.change('00' + productInfoList.sizes[1].size);
              }}
            >
              00
              {productInfoList.sizes && productInfoList.sizes[1].size}
            </button>
            <button
              className="sizeBox"
              onClick={() => {
                this.props.change('00' + productInfoList.sizes[2].size);
              }}
            >
              00
              {productInfoList.sizes && productInfoList.sizes[2].size}
            </button>
            <button
              className="sizeBox"
              onClick={() => {
                this.props.change('00' + productInfoList.sizes[3].size);
              }}
            >
              00
              {productInfoList.sizes && productInfoList.sizes[3].size}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductSize;
