import React, { Component } from 'react';

class MiniPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img
        alt="miniPhoto"
        src={
          this.props.productInfoList.images &&
          this.props.productInfoList.images[this.props.index].image_url
        }
        className="miniPhoto"
        onClick={() => {
          this.props.changePhoto(this.props.imageNum);
        }}
      ></img>
    );
  }
}

export default MiniPhoto;
