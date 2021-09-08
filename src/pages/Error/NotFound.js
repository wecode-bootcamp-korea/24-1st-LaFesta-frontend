import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

class NotFound extends Component {
  render() {
    return (
      <header className="notFoundContainer">
        <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
        <h3>검색하신 상품 혹은 페이지가 존재하지 않습니다.</h3>
        <h4>다른 아이템을 검색하거나 홈페이지로 돌아가시는 건 어떠세요?</h4>
        <button type="button" className="homeBtn">
          <Link to="/">홈페이지로 돌아가기</Link>
        </button>
      </header>
    );
  }
}

export default NotFound;
