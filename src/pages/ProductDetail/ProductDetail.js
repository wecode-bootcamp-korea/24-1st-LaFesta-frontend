import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto';
import ProductSize from './ProductSize';
import ProductBonus from './ProductBonus';
import ShoppingBag from './ShoppingBag';
import { POST_PRODUCTDETAIL_API } from '../../config';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      imageNum: 0,
      isSize: true,
      isBonus: true,
      isShoppingBag: true,
      size: '',
    };
  }

  componentDidMount() {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data.results,
        });
      });
  }

  postProduct = () => {
    const { productInfo } = this.state;

    fetch(`${POST_PRODUCTDETAIL_API}`, {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        product_id: productInfo.product_id,
      }),
    });
  };

  changeSize = size => {
    this.setState({ size }, this.hideSizePick);
  };

  hideSizePick = () => {
    const { isSize } = this.state;

    this.setState({ isSize: !isSize });
  };

  hideBonus = () => {
    const { isBonus } = this.state;

    this.setState({ isBonus: !isBonus });
  };

  hideShoppingBag = () => {
    const { isShoppingBag } = this.state;

    this.setState({ isShoppingBag: !isShoppingBag });
  };

  changePhoto = photo => {
    this.setState({
      imageNum: photo,
    });
  };

  gotoCart = () => {
    this.props.history.push('/cart');
  };

  gotoMain = () => {
    this.props.history.push('/mainPage');
  };

  render() {
    const { productInfo, size, isSize, isBonus, isShoppingBag, imageNum } =
      this.state;
    return (
      <div className="productDetail">
        <div className="nav">임시</div>
        <div className="list">
          <span className="home" onClick={this.gotoMain}>
            홈
          </span>
          &nbsp;&nbsp;/&nbsp;&nbsp;
          <span className="category">{productInfo.section}</span>
          &nbsp; / &nbsp;
          <span className="category">{productInfo.category}</span>
          &nbsp; / &nbsp;
          {productInfo.name}
        </div>
        <div className="productMain">
          <div className="productMainInteraction">
            <div className="slideBox">
              <div className="miniPhotoBox">
                {productInfo.images?.map((image, idx) => {
                  return (
                    <div className="miniPhoto" key={productInfo.images.id}>
                      <ProductPhoto
                        id={image.id}
                        imageUrl={image.image_url}
                        imageNum={-684 * idx}
                        changePhoto={this.changePhoto}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className="slideList"
                style={{
                  transform: `translate3d(
                ${imageNum}px, 0px, 0px`,
                }}
              >
                {productInfo.images?.map(image => {
                  return (
                    <span className="slideContent" key={image.id}>
                      <ProductPhoto imageUrl={image.image_url} />
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="productText">
              <div className="productName">{productInfo.name}</div>
              <div className="productPrice">
                <div className="productColor">
                  {productInfo.colors?.[0].name}
                  <span className="productColorDivision">•</span>
                  {productInfo.colors?.[0].name}
                </div>
                <div>{productInfo.price?.toLocaleString('en')}원</div>
              </div>
              <div
                className="bonus"
                onClick={() => {
                  this.setState({ isBonus: false });
                }}
              >
                카드 혜택보기
              </div>
              <div className="colorNumber">
                {productInfo.colors?.length} 개의 색상
              </div>
              <div className="colorBox">
                {productInfo.colors?.map(color => {
                  return (
                    <div className="outCircle" key={color.id}>
                      <div
                        className={`color${color} circle`}
                        style={{
                          backgroundColor: color.name,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div
                className="productSize"
                onClick={() => {
                  this.setState({ isSize: false });
                }}
              >
                <button>
                  SIZE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{size}
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div
                className={`productPick${size ? 'Off' : 'On'}`}
                onClick={() => {
                  size
                    ? this.setState({ isShoppingBag: false })
                    : this.setState({ isSize: false });
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
          <div className="productMainExplanation">
            <div className="productDetail">
              <div className="detailLook">상세히 보기 </div>
              <div className="productCode">제품코드. PH731E-51N</div>
              <div className="productText">
                {productInfo.description_summary}
              </div>
              <ul className="productDetailText">
                {productInfo.description_extra_information &&
                  productInfo.description_extra_information
                    .split('.')
                    .map(list => {
                      return <li>- {list}</li>;
                    })}
              </ul>
            </div>
            <ProductPhoto imageUrl={productInfo.images?.[1].image_url} />
          </div>
          <div className="productMainDetail">
            <ProductPhoto imageUrl={productInfo.images?.[2].image_url} />
            <ProductPhoto imageUrl={productInfo.images?.[3].image_url} />
          </div>
          <div className="productMainFullBodyPhoto">
            <ProductPhoto imageUrl={productInfo.images?.[4].image_url} />
          </div>
        </div>
        <ProductSize
          hideFilter={this.hideSizePick}
          isSize={isSize}
          sizes={productInfo.sizes}
          changeSize={this.changeSize}
        />
        <ProductBonus hideFilter={this.hideBonus} isBonus={isBonus} />
        <ShoppingBag
          hideFilter={this.hideShoppingBag}
          isShoppingBag={isShoppingBag}
          productInfo={productInfo}
          size={size}
          gotoCart={this.gotoCart}
        />
      </div>
    );
  }
}

export default ProductDetail;
