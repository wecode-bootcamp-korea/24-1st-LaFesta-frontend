import React, { Component } from 'react';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div>
        <html>
          <body>
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
                      라코스테의 아이코닉한 클래식핏, 매끈하게 떨어지는 슬림핏
                    </div>
                    <div>
                      혹은 우아한 셔츠같은 파리 폴로까지 어떤 핏을 선택하든
                    </div>
                    <div>라코스테 폴로는 후회하지 않을 선택일거예요.</div>
                  </div>
                  <div className="subCategoryBox">
                    <div className="subCategoryBoxFirst">
                      <li>폴로</li>
                      <li>파리폴로</li>
                    </div>
                    <div className="subCategoryBoxSecond">
                      <li>클래식핏</li>
                      <li>레귤러핏</li>
                    </div>
                  </div>
                  <div className="filterFunction">
                    <div className="filteringResult">58개의 결과</div>
                    <div className="filterAndAlign">
                      <i class="fas fa-sliders-h"></i> 필터 및 정렬
                    </div>
                  </div>
                </div>
              </header>
            </section>
            <div className="productList">
              <ul className="productListLine">
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
              </ul>

              <ul className="productListLine">
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
                <li className="eachProduct">
                  <img
                    className="eachProductPic"
                    alt="productPicture"
                    src="https://imageapac1.lacoste.com/dw/image/v2/BBCL_PRD/on/demandware.static/-/Sites-master/default/dw43a87826/PH731E-51N_031_20.jpg?imwidth=690&impolicy=product"
                  />
                  <div className="eachProductInfo">
                    <span className="eachProductColor">+ 6 colours</span>
                    <span className="eachProductName">
                      (남성)프렌치 레귤러핏 반팔 폴로
                    </span>
                    <span className="eachProductPrice">139,000원</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pageBtn">
              <div className="numberBtn">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div className="pageMoveBtn">></div>
              </div>
            </div>
          </body>
        </html>
      </div>
    );
  }
}

export default ProductList;
