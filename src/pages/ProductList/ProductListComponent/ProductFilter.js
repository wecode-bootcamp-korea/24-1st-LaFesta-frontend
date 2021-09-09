import React, { Component } from 'react';
import '../productListComponent/ProductFilter.scss';

class ProductFilter extends Component {
  hideFilter = event => {
    event.preventDefault();
    this.props.hideFilter(event.target.dataset.category);
    this.props.hideGrayDisplay(event.target.dataset.category * -100);
  };

  addFilterPrice = event => {
    this.props.addFilterPrice(event.target.dataset.category);
  };

  addFilterColor = event => {
    this.props.addFilterColor(event.target.dataset.category);
  };

  addFilterFit = event => {
    this.props.addFilterFit(event.target.dataset.category);
  };

  render() {
    const { filterMoveNum } = this.props;

    return (
      <div
        className="ProductFilter"
        style={{
          transform: `translateX(
          ${filterMoveNum * 100}%`,
        }}
      >
        <section className="emptyContainer"></section>
        <section className="filterContainer">
          <div className="filterTitle">
            <div className="closeBtn">
              <i
                onClick={this.hideFilter}
                data-category="1"
                className="fas fa-times"
              ></i>
            </div>
            <div>필터 및 정렬</div>
          </div>
          <div className="alignContainer">
            <div className="titleAlign">정렬</div>
            <div className="lowerPriceAlign">
              <div>낮은 가격 순</div>
              <input
                data-category="order=-price"
                name="priceAlign"
                type="radio"
                onClick={this.addFilterPrice}
              ></input>
            </div>
            <div className="higherPriceAlign">
              <div>높은 가격 순</div>
              <input
                data-category="order=price"
                name="priceAlign"
                type="radio"
                onClick={this.addFilterPrice}
              ></input>
            </div>
          </div>
          <div className="subFilter">
            <div className="subFilterTitle">필터</div>
            <div className="colorFilter">COLOR</div>
            <ul className="colorBtn" onClick={this.addFilterColor}>
              <li data-category="&colorId=1" className="redBtn"></li>
              <li data-category="&colorId=2" className="blueBtn"></li>
              <li data-category="&colorId=3" className="greenBtn"></li>
              <li data-category="&colorId=4" className="whiteBtn"></li>
            </ul>
            <div className="fitFilter">FIT</div>
            <ul className="fitChoiceBox">
              <li>
                <div>레귤러핏</div>
                <input
                  data-category="&typeId=1"
                  type="checkbox"
                  onClick={this.addFilterFit}
                ></input>
              </li>
              <li>
                <div>파리폴로</div>
                <input
                  data-category="&typeId=2"
                  type="checkbox"
                  onClick={this.addFilterFit}
                ></input>
              </li>
              <li>
                <div>클래식핏</div>
                <input
                  data-category="&typeId=3"
                  type="checkbox"
                  onClick={this.addFilterFit}
                ></input>
              </li>
              <li>
                <div>슬림핏</div>
                <input
                  data-category="&typeId=4"
                  type="checkbox"
                  onClick={this.addFilterFit}
                ></input>
              </li>
            </ul>
          </div>
          <div className="closeAndResult">
            <div className="eraseAll">모두 지우기</div>
            <div
              className="filterResult"
              onClick={this.hideFilter}
              data-category="1"
            >
              {this.props.searchStyle.length}개의 결과 보기
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductFilter;
