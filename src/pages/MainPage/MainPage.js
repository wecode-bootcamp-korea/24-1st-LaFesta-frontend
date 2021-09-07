import React, { Component } from 'react';
import MainItem from './MainItem/MainItem';
import './MainPage.scss';

let saleMargin = 0;
let insideMargin = 0;
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evnentCount: 1,
      insideCount: 1,
      list: [],
    };
  }

  handleNextClick = () => {
    const { evnentCount, list } = this.state;
    const length = list.filter(item => item.category === 'event').length;

    if (evnentCount < length) {
      this.setState({
        evnentCount: evnentCount + 1,
      });
      saleMargin -= 421;
    }
  };

  handlePrevClick = () => {
    const { evnentCount, list } = this.state;
    const length = list.filter(item => item.category === 'event').length;

    if (!evnentCount < length && evnentCount > 1) {
      this.setState({
        evnentCount: evnentCount - 1,
      });
      saleMargin += 421;
    }
  };

  handleInSideNextClick = () => {
    const { insideCount, list } = this.state;
    const length = list.filter(item => item.category === 'inside').length;

    if (insideCount < length) {
      this.setState({
        insideCount: insideCount + 1,
      });

      insideMargin -= 1562;
    }
  };

  handleInSidePrevClick = () => {
    const { insideCount, list } = this.state;
    const length = list.filter(item => item.category === 'inside').length;

    if (!insideCount < length && insideCount > 1) {
      this.setState({
        insideCount: insideCount - 1,
      });

      insideMargin += 1562;
    }
  };

  componentDidMount() {
    fetch('http://localhost:3001/data/mainData-songhyun.json')
      .then(res => res.json())
      .then(items => {
        this.setState({ list: items });
      });
  }
  render() {
    const { evnentCount, insideCount, list } = this.state;
    const saleLength = list.filter(item => item.category === 'event').length;
    const insideLength = list.filter(item => item.category === 'inside').length;

    const saleStyle = {
      marginLeft: saleMargin,
    };
    const insideStyle = {
      marginLeft: insideMargin,
    };

    return (
      <main>
        <section className="newProductWrapper">
          <div className="newProductContent">
            <h2>Back to School</h2>
            <strong>신상품 아이템 구매시,</strong>
            <p>혜택1. 구매금액별 사은품 증정</p>
            <p>혜택2. 신규가입시 1만원 할인</p>
            <button type="button" className="plusBtn">
              자세히 보기
            </button>
          </div>
        </section>
        <section className="newProductSaleWrapper">
          <div>
            <h3>당신만의 라페스타</h3>
            <ol className="indications">
              <li>
                <button
                  type="button"
                  className="prevBtn"
                  onClick={this.handlePrevClick}
                  disabled={evnentCount === 1}
                >
                  <i className="fas fa-chevron-left" />
                </button>
              </li>
              <li className="startCount">
                <span>{evnentCount}</span>
              </li>
              <li className="center">
                <span>/</span>
              </li>
              <li className="endCount">
                <span>{saleLength}</span>
              </li>
              <li>
                <button
                  type="button"
                  className="nextBtn"
                  onClick={this.handleNextClick}
                  disabled={evnentCount === saleLength}
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </li>
            </ol>
          </div>
          <ul className="newProducts" style={saleStyle}>
            {list.map(item => {
              if (item.category === 'event') {
                return (
                  <>
                    <MainItem item={item} />
                  </>
                );
              }
            })}
          </ul>
        </section>
        <section className="newCollectionWrapper">
          <div className="newCollectionBg" />
          <div className="newCollectionContent">
            <span>LAST CHANCE</span>
            <h2>SS21 시즌오프 세일 연장</h2>
            <span>마지막 시즌 오프 세일 찬스 놓치지 마세요!</span>
            <div className="btnGroup">
              <button type="button" className="saleManBtn">
                남성 세일
              </button>
              <button type="button" className="saleWomenBtn">
                여성 세일
              </button>
            </div>
          </div>
        </section>
        <section className="lafestWorldWrapper">
          <h2>The Lacoste World</h2>
          <ul className="lafeWorlds">
            {list.map(item => {
              if (item.category === 'collection') {
                return (
                  <>
                    <MainItem item={item} />
                  </>
                );
              }
            })}
          </ul>
        </section>
        <section className="lafestInsideWrapper">
          <div>
            <h3>Lacoste Inside</h3>
            <ol className="indications">
              <li>
                <button
                  type="button"
                  className="prevBtn"
                  onClick={this.handleInSidePrevClick}
                  disabled={insideCount === 1}
                >
                  <i className="fas fa-chevron-left" />
                </button>
              </li>
              <li className="startCount">
                <span>{insideCount}</span>
              </li>
              <li className="center">
                <span>/</span>
              </li>
              <li className="endCount">
                <span>{insideLength}</span>
              </li>
              <li>
                <button
                  type="button"
                  className="nextBtn"
                  onClick={this.handleInSideNextClick}
                  disabled={insideCount === insideLength}
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </li>
            </ol>
          </div>
          <ul className="insides" style={insideStyle}>
            {list.map(item => {
              if (item.category === 'inside') {
                return (
                  <>
                    <MainItem item={item} />
                  </>
                );
              }
            })}
          </ul>
        </section>
      </main>
    );
  }
}
export default MainPage;
