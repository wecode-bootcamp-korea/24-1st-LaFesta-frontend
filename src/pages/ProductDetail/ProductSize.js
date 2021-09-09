import React, { Component } from 'react';
import './ProductSize.scss';

class ProductSize extends Component {
  render() {
    const { isSize, sizes, hideFilter, changeSize } = this.props;
    return (
      <div
        className="ProductSize"
        style={{
          transform: `translate3d(
          ${isSize ? 100 : 51}%, 0px, 0px`,
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
            {sizes &&
              sizes.map((size, idx) => {
                return (
                  <button
                    className="sizeBox"
                    onClick={() => {
                      changeSize('00' + sizes[idx].size);
                    }}
                  >
                    00
                    {size.size}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductSize;
