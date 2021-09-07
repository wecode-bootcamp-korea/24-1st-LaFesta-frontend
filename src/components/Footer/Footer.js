import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="iconWrapper">
          <ul className="iconList">
            <li>
              <button>
                <i className="fas fa-sync-alt"></i>
                <span>무료반품</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-truck"></i>
                <span>무료배송</span>
              </button>
            </li>
            <li>
              <button>
                <i className="far fa-credit-card"></i>
                <span>안전결제</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fas fa-headset"></i>
                <span>도움이 필요하세요?</span>
              </button>
            </li>
          </ul>
        </div>

        <section className="footerLinkWrapper">
          <div>
            <div className="kakaoWrapper">
              <div className="kakaoTitle">
                <img
                  src="https://www.lacoste.com/on/demandware.static/Sites-KR-Site/-/default/dw4cdacdfd/img/svg/icon/kakaotalk.svg"
                  alt="kakaoPlusIcon"
                  className="kakaoPlusIcon"
                />
                <h3>LAFESTA KAKAO FRIEND</h3>
              </div>

              <p className="kakaoContent">
                라페스타 카카오 플러스 친구가 되시면 다양한 쇼핑정보 및 혜택을
                받아볼수 있습니다.
              </p>
            </div>
            <button className="kakaoBtn">등록하기</button>
            <strong className="totalStore">240개의 매장</strong>
            <button className="storeSearchBtn">매장 찾기</button>
          </div>

          <div className="aboutWrapper">
            <h4>ABOUT LAFESTA</h4>
            <ul className="aboutLinks list">
              <li>
                <Link to="#">라페스타 멤버쉽</Link>
              </li>
              <li>
                <Link to="#">라페스타 그룹</Link>
              </li>
              <li>
                <Link to="#">라페스타 채용</Link>
              </li>
            </ul>
          </div>

          <div className="collectionWrapper">
            <h4>라페스타 컬렉션</h4>
            <ul className="collcections list">
              <li>
                <Link to="#">남성 POLO</Link>
              </li>
              <li>
                <Link to="#">여성 POLO</Link>
              </li>
              <li>
                <Link to="#">라페스타 키즈</Link>
              </li>
              <li>
                <Link to="#">라페스타 라이브</Link>
              </li>
              <li>
                <Link to="#">라페스타 스포츠</Link>
              </li>
            </ul>
          </div>
          <div className="helpWrapper">
            <h4>도움말 및 연락처</h4>
            <ul className="helps list">
              <li>
                <strong>고객센터</strong>
                <em>1588-9619</em>
                <address>
                  라페스타의 고객 센터는 고객님을 위해 주중 오전 9시부터 6시까지
                  언제나 열려있습니다. (점심시간 12:30~13:30)
                </address>
              </li>
              <li className="bordItem">
                <Link to="#">1:1 문의하기</Link>
              </li>
              <li className="bordItem">
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
        </section>
        <div className="addressWrapper">
          <div className="addressContent">
            <p>
              (주)위워크 타워대표이사 배재현ᅵ서울특별시 강남구 테헤란로 427
              위워크 타워
            </p>
            <p>
              사업자등록번호 120-86-05491 사업자정보확인 ▶ᅵ통신판매업신고번호제
            </p>
            <p>
              2011-서울강남-01501호 개인정보관리책임자: 위워크 CUSTOMER SERVICE
              TEL 1588-9619, CS-KR@LACOSTE.COM
            </p>
          </div>
          <div className="insuranceContent">
            <p>서울보증보험(주) 이행보증보험</p>
            <p>
              고객님은 안전거래를 위해 현금등으로 결제시 결제금액 전액에 대해
              저희 쇼핑몰에서 가입한
            </p>
            서울보증보험(주)의 이행보증보험 서비스를 이용하실 수 있습니다
          </div>
        </div>
        <section className="footerBottom">
          <ul className="bottoms">
            <li>
              <Link to="#">사이트맵 </Link>
            </li>
            <li>
              <Link to="#">법적 고지</Link>
            </li>
            <li>
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="#">사이즈 가이드</Link>
            </li>
            <li className="langeContent">
              <button className="langeBtn">
                <img
                  src="https://static1.lacoste.com/static/on/demandware.static/Sites-KR-Site/-/default/dw544c75a9/img/flags/kr.png"
                  alt="korea language"
                />
                <span className="langeContent">Korea</span>
              </button>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}

export default Footer;
