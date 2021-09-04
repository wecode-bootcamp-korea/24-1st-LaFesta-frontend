import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss';

// 1. The Lacoste World MockData()
// 2. 슬라이드쇼 리스트 숫자 레이아웃 재배치()
// 3. 첫 번째 아이템/마지막 아이템 버튼 클릭 안되게 막기()
// 2. 글씨 오타 검토 ()
// 3. Inside 레이아웃 재배치()
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
    fetch('http://localhost:3003/data/mainData-songhyun.json')
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
            {saleList.map((saleItem, index) => {
              return (
                <li key={`${index}`}>
                  <Link>
                    <figure className="newProductConent">
                      <img src={saleItem.url} alt={saleItem.title} />
                      <figcaption>
                        <strong>{saleItem.title}</strong>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              );
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
            <li>
              <Link>
                <figure>
                  <img
                    src="https://i.postimg.cc/1tfntt0m/brian-asare-u-IT9-Vk0-HHJE-unsplash.jpg"
                    alt="라이브 컬렉션"
                  />
                  <figcaption className="lafestWorlContent">
                    <h3>라코스테 라이브 컬렉션</h3>
                    <strong>신상품 7% 혜택</strong>
                    <button type="button">구매하기</button>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link>
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
              </Link>
            </li>
            <li>
              <Link>
                <figure>
                  <img
                    src="https://i.postimg.cc/43KdwYtS/kristian-egelund-v-Jg-JLz-Wm-XDA-unsplash-1.jpg"
                    alt="신발 컬렉션"
                  />
                  <figcaption className="lafestWorlContent">
                    <h3>라코스테 신발 : 새로운 스타일</h3>
                    <strong>신상품 7% 혜택</strong>
                    <button type="button">구매하기</button>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li>
              <Link>
                <figure>
                  <img
                    src="https://i.postimg.cc/NfXHGrSk/maureen-de-wit-Yx-ZHKf-CPVPU-unsplash.jpg"
                    alt="새로운  액세사리"
                  />
                  <figcaption className="lafestWorlContent">
                    <h3>라코스테 액세사리 : 새로운 스타일</h3>
                    <strong>신상품 7% 혜택</strong>
                    <button type="button">구매하기</button>
                  </figcaption>
                </figure>
              </Link>
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
                  <Link>
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
                  </Link>
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
