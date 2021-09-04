import React, { Component } from 'react';
import Product from './ProductListComponent/Product';
import ProductFilter from './ProductListComponent/ProductFilter';
import Footer from '../../components/Footer/Footer';
import './ProductList.scss';
import './ProductListComponent/Product.scss';
import './ProductListComponent/ProductFilter.scss';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      productStyle: '',
      filterMoveNum: 1,
      grayDisplayNum: -1,
    };
    // this.compareBy_ASC.bind(this);
    // this.sortBy_ASC.bind(this);
    // this.compareBy_DESC.bind(this);
    // this.sortBy_DESC.bind(this);
  }

  componentDidMount() {
    fetch('./data/productListData-doyoung.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res,
        });
      });
  }

  handleChange = event => {
    this.setState({ productStyle: event.target.dataset.category });
  };

  hideFilter = num => {
    this.setState({
      filterMoveNum: num,
    });
  };

  applygrayDisplay = num => {
    this.setState({
      grayDisplayNum: num,
    });
  };

  // compareBy_ASC(key) {
  //   return function (a, b) {
  //     var x = parseInt(a[key]);
  //     var y = parseInt(b[key]);

  //     if (x < y) return -1;
  //     if (x > y) return 1;
  //     return 0;
  //   };
  // }

  // sortBy_ASC(key) {
  //   let arrayCopy = [...this.state.productData];
  //   arrayCopy.sort(this.compareBy_ASC(key));
  //   this.setState({ productData: arrayCopy });
  // }

  // compareBy_DESC(key) {
  //   return function (a, b) {
  //     var x = parseInt(a[key]);
  //     var y = parseInt(b[key]);

  //     if (x > y) return -1;
  //     if (x < y) return 1;
  //     return 0;
  //   };
  // }

  // sortBy_DESC(key) {
  //   let arrayCopy = [...this.state.productData];
  //   arrayCopy.sort(this.compareBy_DESC(key));
  //   this.setState({ productData: arrayCopy });
  // }

  render() {
    const { productData, productStyle } = this.state;
    const searchStyle = productData.filter(data =>
      data.product_Style.includes(productStyle)
    );

    return (
      <div className="productList">
        <div className="productListDisplay">
          <section>
            <div className="menuPath">
              <span>홈</span>
              <span className="menuPathSlash">/</span>
              <span>Men</span>
              <span className="menuPathSlash">/</span>
              <span>의류</span>
            </div>
            <header className="categoryHeader">
              <div
                className="grayDisplay"
                style={{
                  zIndex: `this.state.grayDisplayNum`,
                }}
              ></div>
              <img
                className="categoryIntroPic"
                alt="categoryIntroImage"
                src="https://i.postimg.cc/HkFkNGLv/1-main.jpg"
              />
              <div className="categoryIntro">
                <div className="categoryTitle">남성 폴로</div>
                <div className="categoryDescription">
                  <div>
                    라페스타의 아이코닉한 클래식핏, 매끈하게 떨어지는 슬림핏
                  </div>
                  <div>
                    혹은 우아한 셔츠같은 파리 폴로까지 어떤 핏을 선택하든
                  </div>
                  <div>라페스타 폴로는 후회하지 않을 선택일거예요.</div>
                </div>
                <div className="styleCategory">
                  <div className="subCategory">
                    <div
                      className="resetStyleBtn"
                      data-category=""
                      onClick={this.handleChange}
                    >
                      폴로
                    </div>
                    <div data-category="파리폴로" onClick={this.handleChange}>
                      파리폴로
                    </div>
                    <div data-category="클래식핏" onClick={this.handleChange}>
                      클래식핏
                    </div>
                  </div>
                  <div className="subCategory">
                    <div data-category="레귤러핏" onClick={this.handleChange}>
                      레귤러핏
                    </div>
                    <div data-category="슬림핏" onClick={this.handleChange}>
                      슬림핏
                    </div>
                  </div>
                </div>

                <div className="styleFilter">
                  <div className="styleFilterResult">
                    {searchStyle.length}개의 결과
                  </div>
                  <div
                    className="filterAndAlign"
                    onClick={() => {
                      this.setState({ filterMoveNum: 0.51 });
                    }}
                  >
                    <i className="fas fa-sliders-h"></i> 필터 및 정렬
                  </div>
                </div>
              </div>
            </header>
          </section>
          <div className="products">
            <div className="productsLine">
              {searchStyle.map(data => {
                return (
                  <Product
                    key={data.id}
                    productName={data.productName}
                    productColors={data.productColors}
                    productPic={data.productPic}
                    productPicReverse={data.productPicReverse}
                    productPrice={data.productPrice}
                  />
                );
              })}
            </div>
          </div>
          <div className="pageBtn">
            <div className="numberBtn">
              <a href="https://www.lacoste.com/kr/">1</a>
              <a href="https://www.lacoste.com/kr/">2</a>
              <a href="https://www.lacoste.com/kr/">3</a>
              <a
                className="pageMoveBtn"
                href="https://www.lacoste.com/kr/"
              >{`>`}</a>
            </div>
          </div>
        </div>
        <Footer />
        <ProductFilter
          filterMoveNum={this.state.filterMoveNum}
          hideFilter={this.hideFilter}
          searchStyle={searchStyle}
          priceASC={this.sortBy_ASC}
          priceDESC={this.sortBy_DESC}
        />
      </div>
    );
  }
}

export default ProductList;
