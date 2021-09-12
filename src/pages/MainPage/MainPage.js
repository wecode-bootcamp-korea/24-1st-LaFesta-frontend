import React, { Component } from 'react';
import MainItem from './MainItem/MainItem';
import './MainPage.scss';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCount: 1,
      insideCount: 1,
      eventList: [],
      collectionList: [],
      insideList: [],
    };
    this.saleMargin = 0;
    this.insideMargin = 0;
  }

  handleNextClick = () => {
    const { eventCount, eventList } = this.state;
    const length = eventList.length;

    if (eventCount < length) {
      this.setState({
        eventCount: eventCount + 1,
      });
      this.saleMargin -= 421;
    }
  };

  handlePrevClick = () => {
    const { eventCount, eventList } = this.state;
    const length = eventList.length;

    if (!eventCount < length && eventCount > 1) {
      this.setState({
        eventCount: eventCount - 1,
      });
      this.saleMargin += 421;
    }
  };

  handleInSideNextClick = () => {
    const { insideCount, insideList } = this.state;
    const length = insideList.length;

    if (insideCount < length) {
      this.setState({
        insideCount: insideCount + 1,
      });

      this.insideMargin -= 1566;
    }
  };

  handleInSidePrevClick = () => {
    const { insideCount, insideList } = this.state;

    const length = insideList.length;
    if (!insideCount < length && insideCount > 1) {
      this.setState({
        insideCount: insideCount - 1,
      });

      this.insideMargin += 1566;
    }
  };

  componentDidMount() {
    fetch('/data/mainData-songhyun.json')
      .then(res => res.json())
      .then(lists => {
        const init = {
          insideList: [],
          eventList: [],
          collectionList: [],
        };

        const listInit = {
          inside: 'insideList',
          collection: 'collectionList',
          event: 'eventList',
        };

        lists.forEach(item => {
          init[listInit[item.category]].push(item);
        });

        this.setState({
          insideList: init.insideList,
          eventList: init.eventList,
          collectionList: init.collectionList,
        });
      });
  }

  render() {
    const { eventCount, eventList, insideCount, insideList, collectionList } =
      this.state;
    const saleLength = insideList.length;
    const insideLength = eventList.length;

    const saleStyle = {
      marginLeft: this.saleMargin,
    };
    const insideStyle = {
      marginLeft: this.insideMargin,
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
          <div className="innerWrapper">
            <h3>당신만의 라페스타</h3>
            <ol className="indications">
              <li>
                <button
                  type="button"
                  className="prevBtn"
                  onClick={this.handlePrevClick}
                  disabled={eventCount === 1}
                >
                  <i className="fas fa-chevron-left" />
                </button>
              </li>
              <li className="startCount">
                <span>{eventCount}</span>
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
                  disabled={eventCount === saleLength}
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </li>
            </ol>
          </div>
          <ul className="newProducts" style={saleStyle}>
            {eventList.map(item => (
              <MainItem key={item.id} item={item} />
            ))}
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
            {collectionList.map(item => (
              <MainItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
        <section className="lafestInsideWrapper">
          <div className="innerWrapper">
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
            {insideList.map(item => (
              <MainItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
export default MainPage;
