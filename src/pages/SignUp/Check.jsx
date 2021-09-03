import React, { Component } from 'react';

class Check extends Component {
  render() {
    return (
      <div className="check">
        <input
          type="checkbox"
          checked={this.props.checkList}
          onChange={this.props.headleChange}
          id={this.props.id}
        />
        {this.props.text}
      </div>
    );
  }
}

export default Check;
