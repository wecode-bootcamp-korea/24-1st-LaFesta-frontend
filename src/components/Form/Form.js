import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  handleInput = event => {
    const { value } = event.target;

    this.setState({
      keyword: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch('', {
      method: 'GET',
      body: JSON.stringify({
        keyword: this.state.keyword,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));

    this.setState({
      keyword: '',
    });
  };
  render() {
    const { clicked } = this.props;
    const { keyword } = this.state;
    return (
      <div
        className={`formContainer ${clicked ? 'showSearchForm' : ''}`}
        onSubmit={this.handleSubmit}
      >
        <h4>검색어를 입력하고 키보드로 확인하세요</h4>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="keyword"
            value={keyword}
            placeholder="검색하기"
            aria-label="keyword"
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default Form;
