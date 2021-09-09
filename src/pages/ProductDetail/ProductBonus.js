import React, { Component } from 'react';
import './ProductBonus.scss';
import CARD_DATA from './CARD_DATA';

class ProductBonus extends Component {
  render() {
    const { isBonus, hideFilter } = this.props;
    return (
      <div
        className="ProductBonus"
        style={{
          transform: `translate3d(
          ${isBonus ? 100 : 51}%, 0px, 0px`,
        }}
      >
        <div className="filterContainer">
          <div className="filterTitle">
            <div className="closeBtn">
              <i onClick={hideFilter} className="fas fa-times"></i>
            </div>
            <div className="cardText">카드 혜택보기</div>
            <div className="cardSubText">이니시스 무이자 할부 혜택 안내</div>
          </div>
          <div className="cardBonusContainer">
            <table>
              {CARD_DATA.map(card => {
                return (
                  <tr key={card.id}>
                    <th>{card.name}</th>
                    <td>{card.price}</td>
                    <td>{card.term}</td>
                  </tr>
                );
              })}
            </table>
            <button onClick={hideFilter}>확인</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductBonus;
