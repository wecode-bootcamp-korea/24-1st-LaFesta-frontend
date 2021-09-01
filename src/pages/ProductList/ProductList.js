import React, { Component } from 'react';
import Product from './productListComponent/Product';
import Footer from '../../components/Footer/Footer';
import './ProductList.scss';
import '../ProductList/productListComponent/product.scss';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      productStyle: '',
    };
  }

  componentDidMount() {
    fetch('./data/productListData-doyoung.json', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          productData: res,
        });
      });
  }

  handleChange = event => {
    this.setState({ productStyle: event.target.className });
  };

  render() {
    const { productData, productStyle } = this.state;
    const searchStyle = productData.filter(data =>
      data.productName.includes(productStyle)
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
              <img
                className="categoryIntroPic"
                alt="categoryIntroImage"
                src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Library-Sites-LacosteContent/default/dw7a5def12/2021/FW21/PLP/plp-men-clothing-desk-01.jpg?imwidth=915&impolicy=custom"
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
                <div className="subCategories">
                  <div className="subCategory">
                    <div className="폴로" onClick={this.handleChange}>
                      폴로
                    </div>
                    <div className="PARIS" onClick={this.handleChange}>
                      파리폴로
                    </div>
                    <div className="클래식핏" onClick={this.handleChange}>
                      클래식핏
                    </div>
                  </div>
                  <div className="subCategory">
                    <div className="레귤러핏" onClick={this.handleChange}>
                      레귤러핏
                    </div>
                    <div className="슬림핏" onClick={this.handleChange}>
                      슬림핏
                    </div>
                  </div>
                </div>
                <div className="styleFilter">
                  <div className="styleFilterResult">
                    {searchStyle.length}개의 결과
                  </div>
                  <div className="filterAndAlign">
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
      </div>
    );
  }
}

export default ProductList;
