import React, { Component } from 'react';
import './ProductDetail.scss';
import Footer from '../../components/Footer/Footer';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductInfoList: [],
    };
  }

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
    return (
      <>
        <div className="productDetail">
          <div className="nav">임시</div>
          <div className="list">
            {this.state.ProductInfoList[0] &&
              this.state.ProductInfoList[0].section}
            /
            {this.state.ProductInfoList[0] &&
              this.state.ProductInfoList[0].name}
          </div>
          <div className="productMain">
            <div className="productMainFirst">
              <img
                alt="productPhoto"
                className="productPhoto"
                src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw7318afb2/PH731E-51N_QL2_24.jpg?imwidth=915&impolicy=product"
              ></img>
              <div className="productText">
                <div className="productName">
                  {this.state.ProductInfoList[0] &&
                    this.state.ProductInfoList[0].name}
                </div>
                <div className="productPrice">
                  <div className="productColor">
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0].color[0].name}
                    •
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0].color[0].name}
                  </div>
                  <div>
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0].price}
                    원
                  </div>
                </div>
                <div className="bouns">카드 혜택보기</div>
                <div className="colorNumber">7 개의 색상</div>
                <div className="colorBox">
                  <div className="outcircle">
                    <div className="color1"></div>
                  </div>
                  <div className="outcircle">
                    <div className="color2"></div>
                  </div>
                  <div className="outcircle">
                    <div className="color3"></div>
                  </div>
                  <div className="outcircle">
                    <div className="color4"></div>
                  </div>
                  <div className="outcircle">
                    <div className="color5"></div>
                  </div>
                  <div className="outcircle">
                    <div className="color6"></div>
                  </div>
                  <div className="outcircle">
                    <div className="color7"></div>
                  </div>
                </div>
                <div className="productSize">
                  <button>SIZE</button>
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
                  <i class="fas fa-truck-moving"></i>당일배송 가능여부 확인하기
                  (사이즈를 선택해주세요)
                </p>
              </div>
            </div>
            <div className="productMainSecond">
              <div className="productDetail">
                <div className="detailLook">상세히 보기 </div>
                <div className="productCode">제품코드. PH731E-51N</div>
                <div className="productText">
                  {this.state.ProductInfoList[0] &&
                    this.state.ProductInfoList[0].description_summry}
                </div>
                <li className="productDetailText">
                  <ul>
                    -
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0]
                        .description_extra_infomation}
                  </ul>
                  <ul>
                    -
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0]
                        .description_extra_infomation}
                  </ul>
                  <ul>
                    -
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0]
                        .description_extra_infomation}
                  </ul>
                  <ul>
                    -
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0]
                        .description_extra_infomation}
                  </ul>
                  <ul>
                    -
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0]
                        .description_extra_infomation}
                  </ul>
                  <ul>
                    -
                    {this.state.ProductInfoList[0] &&
                      this.state.ProductInfoList[0]
                        .description_extra_infomation}
                  </ul>
                </li>
              </div>
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  this.state.ProductInfoList[0] &&
                  this.state.ProductInfoList[0].images
                }
              ></img>
            </div>
            <div className="productMainThird">
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  this.state.ProductInfoList[0] &&
                  this.state.ProductInfoList[0].images
                }
              ></img>
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  this.state.ProductInfoList[0] &&
                  this.state.ProductInfoList[0].images
                }
              ></img>
            </div>
            <div className="productMainFourth">
              <img
                className="productPhoto"
                alt="productPhoto"
                src={
                  this.state.ProductInfoList[0] &&
                  this.state.ProductInfoList[0].images
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
