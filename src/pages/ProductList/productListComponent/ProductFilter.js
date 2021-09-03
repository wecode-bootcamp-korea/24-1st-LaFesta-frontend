import React, { Component } from 'react';

class ProductFilter extends Component {
  render() {
    return (
      <section className="filterContainer">
        <div className="filterTitle">
          <div>필터 및 정렬</div>
        </div>
        <div className="alignContainer">
          <div className="titleAlign">정렬</div>
          <div className="lowerPriceAlign">
            <div>낮은 가격 순</div>
            <input type="radio"></input>
          </div>
          <div className="higherPriceAlign">
            <div>높은 가격 순</div>
            <input type="radio"></input>
          </div>
        </div>
        <div className="subFilter">
          <div className="subFilterTitle">필터</div>
          <div className="colorFilter">COLOR</div>
          <ul className="colorBtn">
            <li className="redBtn"></li>
            <li className="blueBtn"></li>
            <li className="greenBtn"></li>
            <li className="whiteBtn"></li>
          </ul>
          <div className="fitFilter">FIT</div>
          <ul className="fitChoiceBox">
            <li>
              <div>폴로</div>
              <input type="checkbox"></input>
            </li>
            <li>
              <div>레귤러핏</div>
              <input type="checkbox"></input>
            </li>
            <li>
              <div>파리폴로</div>
              <input type="checkbox"></input>
            </li>
            <li>
              <div>슬림핏</div>
              <input type="checkbox"></input>
            </li>
          </ul>
        </div>
        <div className="closeAndResult">
          <div className="eraseAll">모두 지우기</div>
          <div className="filterResult">개의 결과 보기</div>
        </div>
      </section>
    );
  }
}

export default ProductFilter;
