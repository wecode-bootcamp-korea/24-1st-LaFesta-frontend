import React, { Component } from 'react';

class ProductPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img
        alt="productPhoto"
        className="productPhoto"
        src={
          this.props.productInfoList.images &&
          this.props.productInfoList.images[this.props.index].image_url
        }
      ></img>
    );
  }
}

export default ProductPhoto;
