import React, { Component } from 'react';
import './MainPage.scss';

class MainPage extends Component {
  render() {
    return (
      <main>
        <section className="newProductWrapper">
          <figure>
            <img
              src="https://i.postimg.cc/xCSbQ4kC/lena-kudryavtseva-rpi-H-Z9ohmk-unsplash.jpg"
              alt="신상품"
            />
            <figcaption className="newProductContent">
              <h2>Back to School</h2>
              <strong>신상품 아이템 구매시,</strong>
              <p>혜택1. 구매금액별 사은품 증정</p>

              <p>혜택2. 신규가입시 1만원 할인</p>
              <button type="button" className="plusBtn">
                자세히 보기
              </button>
            </figcaption>
          </figure>
        </section>
        <section className="newProductSaleWrapper">
          <h3>당신만의 라코스테</h3>
          <ul className="newProducts">
            <li>
              <a>
                <figure>
                  <img
                    src="https://i.postimg.cc/SRY0GDr6/erwans-socks-p-Flj-CK5-HHt-U-unsplash.jpg"
                    alt="폴로 셔츠"
                  />
                  <figcaption>
                    <strong>그를 위한 새로운 폴로셔츠</strong>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src="https://i.postimg.cc/x8NVZp5T/photo-1597278318687-1d7e1e4e320e.jpg"
                    alt="드레스&스커트"
                  />
                  <figcaption>
                    <strong>그녀를 위한 새로운 드레스 & 스커트</strong>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img src="https://i.postimg.cc/x8NVZp5T/photo-1597278318687-1d7e1e4e320e.jpg" />
                  <figcaption>
                    <strong>남성 신상품 7% 혜택</strong>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li>
              <a>
                <figure>
                  <img
                    src="https://i.postimg.cc/t4x3HPrB/ospan-ali-H8uf5ua5u-W4-unsplash.jpg"
                    alt="여성 신상품"
                  />
                  <figcaption>
                    <strong>여성 신상품 7% 혜택</strong>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <a>
            <figure>
              <img
                src="https://i.postimg.cc/x8NVZp5T/photo-1597278318687-1d7e1e4e320e.jpg"
                alt="남성 신상품"
              />
              <figcaption>
                <strong>남성 신상품 7% 혜택</strong>
              </figcaption>
            </figure>
          </a>
          <div className="newCollectionWrapper">
            <img
              src="https://i.postimg.cc/x8NVZp5T/photo-1597278318687-1d7e1e4e320e.jpg"
              alt="신상품 컬렉션"
            />

            <div className="newCollectionContent">
              <h2>FW 21 신상품 컬렉션! 'LUCKY7' 할인코드</h2>
              <strong>
                FW21 신상품 구매시 'LUCKY7' 코드를 입력하시면 멤버십 전용 7%
                즉시 할인 혜택을 드립니다
              </strong>
              <button type="button" className="buyBtn">
                구매하기
              </button>
            </div>
          </div>
        </section>
        <section className="lafestWorldWrapper">
          <h3>The Lacoste World</h3>
        </section>
        <section className="lafestInsideWrapper">
          <h3>Lacoste Inside</h3>
        </section>
      </main>
    );
  }
}
export default MainPage;
