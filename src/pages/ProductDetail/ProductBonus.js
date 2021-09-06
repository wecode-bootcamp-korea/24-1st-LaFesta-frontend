import React, { Component } from 'react';
import './ProductBonus.scss';

class ProductBonus extends Component {
  render() {
    const { isBonus, hideFilter } = this.props;
    return (
      <div
        className="ProductBonus"
        style={{
          transform: `translate3d(
          ${isBonus * 100}%, 0px, 0px`,
        }}
      >
        <div className="filterContainer">
          <div className="filterTitle">
            <div className="closeBtn">
              <i
                onClick={hideFilter}
                data-category="1"
                className="fas fa-times"
              ></i>
            </div>
            <div className="cardText">카드 혜택보기</div>
            <div className="cardSubText">이니시스 무이자 할부 혜택 안내</div>
          </div>
          <div className="cardBonusContainer">
            <table>
              <tr>
                <th>하나카드</th>
                <td>5만원 이상</td>
                <td>2~6개월</td>
              </tr>
              <tr>
                <th>삼성카드</th>
                <td>5만원 이상</td>
                <td>2~6개월</td>
              </tr>
              <tr>
                <th>현대카드</th>
                <td>5만원 이상</td>
                <td>2~7개월</td>
              </tr>
              <tr>
                <th>국민카드</th>
                <td>5만원 이상</td>
                <td>2~6개월</td>
              </tr>
              <tr>
                <th>신한카드</th>
                <td>5만원 이상</td>
                <td>2~6개월</td>
              </tr>
              <tr>
                <th>롯데카드</th>
                <td>5만원 이상</td>
                <td>2~4개월</td>
              </tr>
              <tr>
                <th>비씨카드</th>
                <td>5만원 이상</td>
                <td>2~6개월</td>
              </tr>
              <tr>
                <th>농협카드</th>
                <td>5만원 이상</td>
                <td>2~6개월</td>
              </tr>
              <tr>
                <th>씨티카드</th>
                <td>5만원 이상</td>
                <td>2~6개월</td>
              </tr>
            </table>
            <button onClick={hideFilter}>확인</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductBonus;
