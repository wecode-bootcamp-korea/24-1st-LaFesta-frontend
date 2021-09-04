import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto';
import './ProductDetail.scss';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoList: [],
      imageNum: 0,
    };
  }

  componentDidMount() {
    fetch('/data/productData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfoList: data.results,
        });
      });
  }

  render() {
    const { productInfoList } = this.state;
    return (
      <>
        <div className="productDetail">
          <div className="nav">임시</div>
          <div className="list">
            <span className="home">홈</span>&nbsp;&nbsp;/&nbsp;&nbsp;
            <span className="category">
              {productInfoList && productInfoList.section}
            </span>
            &nbsp; / &nbsp;
            <span className="category">
              {productInfoList && productInfoList.category}
            </span>
            &nbsp; / &nbsp;
            {productInfoList && productInfoList.name}
          </div>
          <div className="productMain">
            <div className="productMainFirst">
              <div className="slideBox">
                <img
                  src={
                    productInfoList.images &&
                    productInfoList.images[0].image_url
                  }
                  className="miniPhoto"
                  onClick={() => {
                    this.setState({
                      imageNum: this.state.imageNum + 1,
                    });
                  }}
                  alt="d"
                ></img>
                <div
                  className="slideList"
                  style={{
                    transform: `translate3d(
                ${this.state.imageNum * -684}px, 0px, 0px`,
                  }}
                >
                  <span className="slide_content slide01">
                    <ProductPhoto
                      productInfoList={this.state.productInfoList}
                      index="0"
                    />
                  </span>
                  <span className="slide_content slide02">
                    <ProductPhoto
                      productInfoList={this.state.productInfoList}
                      index="1"
                    />
                  </span>
                  <span className="slide_content slide03">
                    <ProductPhoto
                      productInfoList={this.state.productInfoList}
                      index="0"
                    />
                  </span>
                </div>
              </div>
              <div className="productText">
                <div className="productName">
                  {productInfoList && productInfoList.name}
                </div>
                <div className="productPrice">
                  <div className="productColor">
                    {productInfoList.colors && productInfoList.colors[0].name}
                    &nbsp; • &nbsp;
                    {productInfoList.colors && productInfoList.colors[0].name}
                  </div>
                  <div>
                    {productInfoList.price &&
                      productInfoList.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </div>
                </div>
                <div className="bouns">카드 혜택보기</div>
                <div className="colorNumber">7 개의 색상</div>
                <div className="colorBox">
                  {[1, 2, 3, 4, 5, 6, 7].map(circle => {
                    return (
                      <div className="outCircle" key={circle}>
                        <div className={`color${circle} circle`}></div>
                      </div>
                    );
                  })}
                </div>
                <div className="productSize">
                  <button>
                    SIZE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <div className="productPick">
                  <button>사이즈 선택하기</button>
                </div>
                <p className="productCaution">
                  당일배송은 서울지역, 월~금요일 오후 12시까지
                  선택가능(공휴일/주말 제외) 재고부족 시, 사이즈 선택이
                  가능하더라도 장바구니에 제품을 담을 수 없습니다
                </p>
                <p className="check">
                  <i className="fas fa-truck-moving"></i>&nbsp;당일배송 가능여부
                  확인하기 (사이즈를 선택해주세요)
                </p>
              </div>
            </div>
            <div className="productMainSecond">
              <div className="productDetail">
                <div className="detailLook">상세히 보기 </div>
                <div className="productCode">제품코드. PH731E-51N</div>
                <div className="productText">
                  {productInfoList && productInfoList.description_summary}
                </div>
                <ul className="productDetailText">
                  {[1, 2, 3, 4, 5, 6].map(list => {
                    return (
                      <li>
                        -
                        {productInfoList.description_extra_information &&
                          productInfoList.description_extra_information.split(
                            ','
                          )[list - 1]}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ProductPhoto
                productInfoList={this.state.productInfoList}
                index="0"
              />
            </div>
            <div className="productMainThird">
              <ProductPhoto
                productInfoList={this.state.productInfoList}
                index="1"
              />
              <ProductPhoto
                productInfoList={this.state.productInfoList}
                index="1"
              />
            </div>
            <div className="productMainFourth">
              <ProductPhoto
                productInfoList={this.state.productInfoList}
                index="1"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetail;
