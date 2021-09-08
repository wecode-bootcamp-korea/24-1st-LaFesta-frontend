import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PopUp.scss';

class PopUp extends Component {
  mouseOut = () => {
    const { mouseOut } = this.props;

    if (mouseOut) {
      mouseOut(false);
    }
  };
  render() {
    const { name } = this.props;
    return (
      <div className={`popUp ${name ? 'showPopUp' : ''}`}>
        <div onMouseOut={this.mouseOut}>
          <h3>안녕하세요 {name}님,</h3>
          <ul>
            <li>
              <Link to="#">
                <p>마이 페이지</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>나의 주문 환불 내역</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <p>Customer Service</p>
              </Link>
            </li>
          </ul>
          <button type="button" className="logOutBtn">
            로그아웃
          </button>
        </div>
      </div>
    );
  }
}

export default PopUp;
