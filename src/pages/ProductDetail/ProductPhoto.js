import React, { Component } from 'react';

class ProductPhoto extends Component {
  render() {
    const { imageUrl, imageNum, changePhoto } = this.props;
    return (
      <img
        alt="productPhoto"
        className="productPhoto"
        src={imageUrl}
        onClick={() => {
          changePhoto(imageNum);
        }}
      />
    );
  }
}

export default ProductPhoto;
