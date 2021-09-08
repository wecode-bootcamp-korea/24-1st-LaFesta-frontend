import React, { Component } from 'react';
import Product from './ProductListComponent/Product';
import ProductFilter from './ProductListComponent/ProductFilter';
import './ProductList.scss';
import './ProductListComponent/product.scss';
import './ProductListComponent/ProductFilter.scss';

const LIMIT = 28;

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      productFits: '',
      filterMoveNum: 1,
      grayDisplayNum: -1,
      filterPrice: '',
      filterColor: [],
      filterFit: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.7.159:8000/products?limit=28&offset=0')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res.results.products,
        });
      });
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`http://10.58.7.159:8000/products?${this.props.location.search}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            productData: res.results.products,
          });
        });
    }
  }

  addFilterPrice = e => {
    this.setState({
      filterPrice: e,
    });
  };

  addFilterColor = e => {
    this.setState({
      filterColor: this.state.filterColor.concat({ e }),
    });
  };

  handleClick = index => {
    const query = `limit=${LIMIT}&offset=${index * LIMIT}`;
    this.props.history.push(`/productlist?${query}`);
  };

  styleChange = event => {
    this.setState({ productFits: event.target.dataset.category });
  };

  hideFilter = () => {
    this.setState({
      filterMoveNum: 1,
    });
  };

  hideGrayDisplay = () => {
    this.setState({
      grayDisplayNum: -1,
    });
  };

  render() {
    const { productData, productFits } = this.state;
    const searchStyle = productData.filter(data =>
      data.fit.includes(productFits)
    );

    console.log(productData);

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
                  zIndex: `${this.state.grayDisplayNum}`,
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
                <div className="styleCategory" onClick={this.styleChange}>
                  <div className="subCategory">
                    <div className="resetStyleBtn" data-category="">
                      폴 로
                    </div>
                    <div data-category="파리폴로">파리폴로</div>
                    <div data-category="클래식핏">클래식핏</div>
                  </div>
                  <div className="subCategory">
                    <div data-category="레귤러핏">레귤러핏</div>
                    <div data-category="슬림핏">슬림핏</div>
                  </div>
                </div>

                <div className="styleFilter">
                  <div className="styleFilterResult">
                    {searchStyle.length}개의 결과
                  </div>
                  <div
                    className="filterAndAlign"
                    onClick={() => {
                      this.setState({
                        filterMoveNum: 0.51,
                        grayDisplayNum: 10,
                      });
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
              {productData &&
                searchStyle.map((data, idx) => {
                  return (
                    <Product
                      key={data.id}
                      itemId={data.id}
                      idx={idx}
                      productName={data.name}
                      productColorNum={data.color_num}
                      productPic={data.img_url}
                      productPrice={data.price}
                    />
                  );
                })}
            </div>
          </div>
          <div className="pageBtn">
            <div className="numberBtn">
              <button onClick={() => this.handleClick(0)}>1</button>
              <button onClick={() => this.handleClick(1)}>2</button>
              <button onClick={() => this.handleClick(2)}>3</button>
              <button onClick={() => this.handleClick(3)}>4</button>
              <button onClick={() => this.handleClick(4)}>5</button>
            </div>
          </div>
        </div>
        <ProductFilter
          filterMoveNum={this.state.filterMoveNum}
          hideFilter={this.hideFilter}
          hideGrayDisplay={this.hideGrayDisplay}
          searchStyle={searchStyle}
        />
      </div>
    );
  }
}

export default ProductList;
