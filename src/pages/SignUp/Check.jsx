import React, { Component } from 'react';

class Check extends Component {
  render() {
    return (
      <div className="check">
        <input
          type="checkbox"
          checked={this.props.ischecked}
          onChange={this.props.headleChange}
        />
        {this.props.text}
      </div>
    );
  }
}

export default Check;
