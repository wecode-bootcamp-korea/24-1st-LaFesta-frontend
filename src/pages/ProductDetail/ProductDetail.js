import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto';
import ProductSize from './ProductSize';
import ProductBonus from './ProductBonus';
import ShoppingBag from './ShoppingBag';
import MiniPhoto from './MiniPhoto';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoList: [],
      imageNum: 0,
      isSize: 1,
      isBonus: 1,
      size: '',
      isShoppingBag: 1,
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

  postProduct = () => {
    fetch('http://10.58.7.79:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        product_id: this.state.productInfoList.product_id,
      }),
    });
  };

  changeSize = size => {
    this.setState({ size: size }, this.hideFilter());
  };

  hideFilter = () => {
    if (this.state.isSize !== 1) {
      this.setState({ isSize: 1 });
      return;
    }
    if (this.state.isBonus !== 1) {
      this.setState({ isBonus: 1 });
      return;
    }
    if (this.state.isShoppingBag !== 1) {
      this.setState({ isShoppingBag: 1 });
      return;
    }
  };

  changePhoto = photo => {
    this.setState({
      imageNum: photo,
    });
  };

  gotoCart = () => {
    this.props.history.push('/cart');
  };

  render() {
    const { productInfoList, size, isSize, isBonus, isShoppingBag } =
      this.state;
    return (
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
              <div className="miniPhotoBox">
                <MiniPhoto
                  index="0"
                  productInfoList={productInfoList}
                  imageNum="0"
                  changePhoto={this.changePhoto}
                />
                <MiniPhoto
                  index="1"
                  productInfoList={productInfoList}
                  imageNum="-684"
                  changePhoto={this.changePhoto}
                />
                <MiniPhoto
                  index="0"
                  productInfoList={productInfoList}
                  imageNum="-1368"
                  changePhoto={this.changePhoto}
                />
              </div>
              <div
                className="slideList"
                style={{
                  transform: `translate3d(
                ${this.state.imageNum}px, 0px, 0px`,
                }}
              >
                <span className="slide_content slide01">
                  <ProductPhoto productInfoList={productInfoList} index="0" />
                </span>
                <span className="slide_content slide02">
                  <ProductPhoto productInfoList={productInfoList} index="1" />
                </span>
                <span className="slide_content slide03">
                  <ProductPhoto productInfoList={productInfoList} index="0" />
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
              <div
                className="bonus"
                onClick={() => {
                  this.setState({ isBonus: 0.51 });
                }}
              >
                카드 혜택보기
              </div>
              <div className="colorNumber">7 개의 색상</div>
              <div className="colorBox">
                {[1, 2, 3, 4, 5, 6, 7].map(circle => {
                  return (
                    <div className="outCircle" key={circle}>
                      <div
                        className={`color${circle} circle`}
                        style={{
                          backgroundColor:
                            productInfoList.colors &&
                            productInfoList.colors[0].color,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div
                className="productSize"
                onClick={() => {
                  this.setState({ isSize: 0.51 });
                }}
              >
                <button>
                  SIZE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{size}
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div
                className={size ? 'productPickOff' : 'productPickOn'}
                onClick={() => {
                  size
                    ? this.setState({ isShoppingBag: 0.51 })
                    : this.setState({ isSize: 0.51 });
                }}
              >
                <button onClick={size && this.postProduct}>
                  {size ? '쇼핑백에 추가하기' : '사이즈 선택하기'}
                </button>
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
                {productInfoList.description_extra_information &&
                  productInfoList.description_extra_information
                    .split(',')
                    .map(list => {
                      return <li>- {list}</li>;
                    })}
              </ul>
            </div>
            <ProductPhoto productInfoList={productInfoList} index="0" />
          </div>
          <div className="productMainThird">
            <ProductPhoto productInfoList={productInfoList} index="1" />
            <ProductPhoto productInfoList={productInfoList} index="1" />
          </div>
          <div className="productMainFourth">
            <ProductPhoto productInfoList={productInfoList} index="1" />
          </div>
        </div>
        <ProductSize
          hideFilter={this.hideFilter}
          isSize={isSize}
          productInfoList={productInfoList}
          changeSize={this.changeSize}
        />
        <ProductBonus hideFilter={this.hideFilter} isBonus={isBonus} />
        <ShoppingBag
          hideFilter={this.hideFilter}
          isShoppingBag={isShoppingBag}
          productInfoList={productInfoList}
          size={size}
          gotoCart={this.gotoCart}
        />
      </div>
    );
  }
}

export default ProductDetail;
