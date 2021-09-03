import React, { Component } from 'react';
import './ProductDetail.scss';
import Footer from '../../components/Footer/Footer';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductInfoList: [],
      imageNum: 0,
    };
  }
  // /data/productData.json
  componentDidMount() {
    fetch('/data/productData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          ProductInfoList: data.results,
        });
      });
  }
  render() {
    const { ProductInfoList } = this.state;
    return (
      <>
        <div className="productDetail">
          <div className="nav">임시</div>
          <div className="list">
            <span className="home">홈</span>&nbsp;&nbsp;/&nbsp;&nbsp;
            <span className="category">
              {ProductInfoList && ProductInfoList.section}
            </span>
            &nbsp; / &nbsp;
            <span className="category">
              {ProductInfoList && ProductInfoList.category}
            </span>
            &nbsp; / &nbsp;
            {ProductInfoList && ProductInfoList.name}
          </div>
          <div className="productMain">
            <div className="productMainFirst">
              <div class="slideBox">
                <img
                  src={
                    ProductInfoList.images &&
                    ProductInfoList.images[0].image_url
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
                  class="slideList"
                  style={{
                    transform: `translate3d(
                ${this.state.imageNum * -684}px, 0px, 0px`,
                  }}
                >
                  <span class="slide_content slide01">
                    <img
                      alt="productPhoto"
                      className="productPhoto"
                      src={
                        ProductInfoList.images &&
                        ProductInfoList.images[0].image_url
                      }
                    ></img>
                  </span>
                  <span class="slide_content slide02">
                    <img
                      alt="productPhoto"
                      className="productPhoto"
                      src={
                        ProductInfoList.images &&
                        ProductInfoList.images[1].image_url
                      }
                    ></img>
                  </span>
                  <span class="slide_content slide03">
                    <img
                      alt="productPhoto"
                      className="productPhoto"
                      src={
                        ProductInfoList.images &&
                        ProductInfoList.images[0].image_url
                      }
                    ></img>
                  </span>
                </div>
              </div>
              <div className="productText">
                <div className="productName">
                  {ProductInfoList && ProductInfoList.name}
                </div>
                <div className="productPrice">
                  <div className="productColor">
                    {ProductInfoList.colors && ProductInfoList.colors[0].name}
                    &nbsp; • &nbsp;
                    {ProductInfoList.colors && ProductInfoList.colors[0].name}
                  </div>
                  <div>
                    {ProductInfoList.price &&
                      ProductInfoList.price.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ','
                      )}
                    원
                  </div>
                </div>
                <div className="bouns">카드 혜택보기</div>
                <div className="colorNumber">7 개의 색상</div>
                <div className="colorBox">
                  <div className="outCircle">
                    <div className="color1"></div>
                  </div>
                  <div className="outCircle">
                    <div className="color2"></div>
                  </div>
                  <div className="outCircle">
                    <div className="color3"></div>
                  </div>
                  <div className="outCircle">
                    <div className="color4"></div>
                  </div>
                  <div className="outCircle">
                    <div className="color5"></div>
                  </div>
                  <div className="outCircle">
                    <div className="color6"></div>
                  </div>
                  <div className="outCircle">
                    <div className="color7"></div>
                  </div>
                </div>
                <div className="productSize">
                  <button>
                    SIZE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-chevron-right"></i>
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
                  <i class="fas fa-truck-moving"></i>&nbsp;당일배송 가능여부
                  확인하기 (사이즈를 선택해주세요)
                </p>
              </div>
            </div>
            <div className="productMainSecond">
              <div className="productDetail">
                <div className="detailLook">상세히 보기 </div>
                <div className="productCode">제품코드. PH731E-51N</div>
                <div className="productText">
                  {ProductInfoList && ProductInfoList.description_summary}
                </div>
                <li className="productDetailText">
                  <ul>
                    -
                    {ProductInfoList.description_extra_information &&
                      ProductInfoList.description_extra_information.split(
                        ','
                      )[0]}
                  </ul>
                  <ul>
                    -
                    {ProductInfoList.description_extra_information &&
                      ProductInfoList.description_extra_information.split(
                        ','
                      )[1]}
                  </ul>
                  <ul>
                    -
                    {ProductInfoList.description_extra_information &&
                      ProductInfoList.description_extra_information.split(
                        ','
                      )[2]}
                  </ul>
                  <ul>
                    -
                    {ProductInfoList.description_extra_information &&
                      ProductInfoList.description_extra_information.split(
                        ','
                      )[3]}
                  </ul>
                  <ul>
                    -
                    {ProductInfoList.description_extra_information &&
                      ProductInfoList.description_extra_information.split(
                        ','
                      )[4]}
                  </ul>
                  <ul>
                    -
                    {ProductInfoList.description_extra_information &&
                      ProductInfoList.description_extra_information.split(
                        ','
                      )[5]}
                  </ul>
                </li>
              </div>
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  ProductInfoList.images && ProductInfoList.images[0].image_url
                }
              ></img>
            </div>
            <div className="productMainThird">
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  ProductInfoList.images && ProductInfoList.images[1].image_url
                }
              ></img>
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  ProductInfoList.images && ProductInfoList.images[1].image_url
                }
              ></img>
            </div>
            <div className="productMainFourth">
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  ProductInfoList.images && ProductInfoList.images[1].image_url
                }
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
