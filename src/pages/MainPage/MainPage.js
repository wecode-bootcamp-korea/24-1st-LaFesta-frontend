import React, { Component } from 'react';
import './MainPage.scss';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleCount: 1,
      insideCount: 1,
      saleMargin: 0,
      insideMargin: 0,
      saleList: [],
      insideList: [],
    };
  }

  handleNextClick = () => {
    const { saleCount, saleMargin, saleList } = this.state;

    if (saleCount < saleList.length) {
      this.setState({ saleCount: saleCount + 1 });
      this.setState({ saleMargin: saleMargin - 421 });
    }
  };

  handlePrevClick = () => {
    const { saleCount, saleMargin, saleList } = this.state;

    if (!saleCount < saleList.length && saleCount > 1) {
      this.setState({ saleCount: saleCount - 1 });
      this.setState({ saleMargin: saleMargin + 421 });
    }
  };

  handleInSideNextClick = () => {
    const { insideCount, insideMargin, insideList } = this.state;
    if (insideCount < insideList.length) {
      this.setState({ insideCount: insideCount + 1 });
      this.setState({ insideMargin: insideMargin - 1516 });
    }
  };

  handleInSidePrevClick = () => {
    const { insideCount, insideMargin, insideList } = this.state;

    if (!insideCount < insideList.length && insideCount > 1) {
      this.setState({ insideCount: insideCount - 1 });
      this.setState({ insideMargin: insideMargin + 1516 });
    }
  };
  componentDidMount() {
    fetch('http://localhost:3001/data/mainData-songhyun.json')
      .then(res => res.json())
      .then(saleItems => {
        this.setState({
          saleList: saleItems.filter(item => item.category.includes('event')),
          insideList: saleItems.filter(item =>
            item.category.includes('inside')
          ),
        });
      });
  }

  render() {
    const {
      saleList,
      insideList,
      saleCount,
      insideCount,
      saleMargin,
      insideMargin,
    } = this.state;
    const saleStyle = {
      marginLeft: saleMargin,
    };
    const insideStyle = {
      marginLeft: insideMargin,
    };
    console.log('render margin >>', saleMargin);
    return (
      <main>
        <section className="newProductWrapper">
          <figure>
            <img
              src="https://i.postimg.cc/xCSbQ4kC/lena-kudryavtseva-rpi-H-Z9ohmk-unsplash.jpg"
              alt="신상품"
            />
            <figcaption className="newProductContent">
              <h2>Back to School</h2>
              <strong>신상품 아이템 구매시,</strong>
              <p>혜택1. 구매금액별 사은품 증정</p>
              <p>혜택2. 신규가입시 1만원 할인</p>
              <button type="button" className="plusBtn">
                자세히 보기
              </button>
            </figcaption>
          </figure>
        </section>
        <section className="newProductSaleWrapper">
          <div>
            <h3>당신만의 라코스테</h3>
            <ol className="indications">
              <li>
                <button className="prevBtn" onClick={this.handlePrevClick}>
                  <i className="fas fa-chevron-left" />
                </button>
              </li>
              <li className="startCount">
                <span>{saleCount}</span>
              </li>
              <li className="center">
                <span>/</span>
              </li>
              <li className="endCount">
                <span>{saleList.length}</span>
              </li>
              <li>
                <button
                  type="button"
                  className="nextBtn"
                  onClick={this.handleNextClick}
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </li>
            </ol>
          </div>
          <ul className="newProducts" style={saleStyle}>
            {saleList.map(saleItem => {
              return (
                <li key={saleItem.id}>
                  <a>
                    <figure className="newProductConent">
                      <img src={saleItem.url} alt={saleItem.title} />
                      <figcaption>
                        <strong>{saleItem.title}</strong>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <div className="newCollectionWrapper">
            <img
              src="https://i.postimg.cc/x8NVZp5T/photo-1597278318687-1d7e1e4e320e.jpg"
              alt="신상품 컬렉션"
            />

            <div className="newCollectionContent">
              <h2>FW 21 신상품 컬렉션! 'LUCKY7' 할인코드</h2>
              <strong>
                FW21 신상품 구매시 'LUCKY7' 코드를 입력하시면 멤버십 전용 7%
                즉시 할인 혜택을 드립니다
              </strong>
              <button type="button" className="buyBtn">
                구매하기
              </button>
            </div>
          </div>
        </section>
        <section className="lafestWorldWrapper">
          <h2>The Lacoste World</h2>
          <ul className="lafeWorlds">
            <li>
              <a>
                <figure>
                  <img
                    src="https://i.postimg.cc/j5M8Fs7b/anomaly-WWesm-HEg-XDs-unsplash.jpg"
                    alt="라이브 컬렉션"
                  />
                  <figcaption className="lafestWorlContent">
                    <h3>라코스테 라이브 컬렉션</h3>
                    <strong>신상품 7% 혜택</strong>
                    <button type="button">구매하기</button>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src="https://i.postimg.cc/j5M8Fs7b/anomaly-WWesm-HEg-XDs-unsplash.jpg"
                    alt="신상품 컬렉션"
                  />
                  <figcaption className="lafestWorlContent">
                    <h3>유니섹스 컬렉션: 더블매치</h3>
                    <strong>신상품 7% 혜택</strong>
                    <button type="button">구매하기</button>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
          <ul className="lafeWorlds">
            <li>
              <a>
                <figure>
                  <img
                    src="https://i.postimg.cc/j5M8Fs7b/anomaly-WWesm-HEg-XDs-unsplash.jpg"
                    alt="신발 컬렉션"
                  />
                  <figcaption className="lafestWorlContent">
                    <h3>라코스테 신발 : 새로운 스타일</h3>
                    <strong>신상품 7% 혜택</strong>
                    <button type="button">구매하기</button>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src="https://i.postimg.cc/j5M8Fs7b/anomaly-WWesm-HEg-XDs-unsplash.jpg"
                    alt="여성 신상품"
                  />
                  <figcaption className="lafestWorlContent">
                    <h3>라코스테 액세사리 : 새로운 스타일</h3>
                    <strong>신상품 7% 혜택</strong>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </section>
        <section className="lafestInsideWrapper">
          <div>
            <h3>Lacoste Inside</h3>
            <ol className="indications">
              <li>
                <button
                  className="prevBtn"
                  onClick={this.handleInSidePrevClick}
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
                <span>{insideList.length}</span>
              </li>
              <li>
                <button
                  type="button"
                  className="nextBtn"
                  onClick={this.handleInSideNextClick}
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </li>
            </ol>
          </div>
          <ul className="insides" style={insideStyle}>
            {insideList.map(insideItem => {
              return (
                <li key={insideItem.id}>
                  <a>
                    <figure className="insideContent">
                      <img src={insideItem.url} alt={insideItem.title} />
                      <figcaption>
                        <span>{insideItem.subtitle}</span>
                        <h3>{insideItem.title}</h3>
                        <strong>{insideItem.content}</strong>
                        <button type="button" className="summaryBtn">
                          자세히 보기
                        </button>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}
export default MainPage;
