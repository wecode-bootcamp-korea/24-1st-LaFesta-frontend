import React, { Component } from 'react';

class Check extends Component {
  render() {
    const { checkList, handleChange, id, text } = this.props;
    return (
      <div className="check">
        <input
          type="checkbox"
          checked={checkList}
          onChange={handleChange}
          id={id}
        />
        {text}
      </div>
    );
  }
}

export default Check;
