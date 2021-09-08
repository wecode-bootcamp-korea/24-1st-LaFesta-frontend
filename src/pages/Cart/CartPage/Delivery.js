import React, { Component } from 'react';
import PriceInfo from '../CartComponent/PriceInfo';
import CheckedCartList from '../CartComponent/CheckedCartList';
import './Delivery.scss';

class Delivery extends Component {
  render() {
    const { cartListData } = this.props;

    return (
      <div className="Delivery">
        <div className="DeliveryInfo">
          <div className="firstBox">
            <div div className="title">
              배송
            </div>
            <div className="firstBoxFirst">
              <div className="firstBoxFirstTitle">당일 배송 • 4,000원</div>
              <input type="radio"></input>
              <p>
                당일배송은 오전 00시 01분부터 오후 12시까지 결제 완료한 서울
                지역 주문에 한하여 진행됩니다. 오후 12시 이후 및 주말/공휴일
                주문의 경우 돌아오는 첫 영업일 기준으로 순차적으로 배송되며,
                빠른 배송진행을 위해 당일배송 신청 후, 주소변경 및 주문취소는
                불가합니다.
              </p>
            </div>
            <div className="firstBoxSecond">
              <div className="firstBoxSecondTitle">일반 배송 • 무료</div>
              <input type="radio"></input>
              <p>
                입금 확인 후 3~4일 이내(공휴일 제외)에 배달됩니다 (나의 라코스테
                폴로 등 일부 품목 제외) 그러나 배송기간 중 휴일이 포함되어
                있거나 제품의 재고 상황에 따라 기간이 다소 지연될 수도 있습니다.
              </p>
            </div>
          </div>
          <div className="SecondBox">
            <div div className="title">
              새 배송지(*필수)
            </div>
            <div className="userGender">
              <div>성별</div>
              <div className="center">
                <input
                  type="radio"
                  name="gender"
                  value="남성"
                  onChange={this.props.handleInput}
                ></input>
                남성
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="여성"
                  onChange={this.props.handleInput}
                ></input>
                여성
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="이름"
                onChange={this.props.handleInput}
                name="name"
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="우편번호"
                onChange={this.props.handleInput}
                name="zipCode"
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="주소"
                onChange={this.props.handleInput}
                name="address"
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="상세주소"
                onChange={this.props.handleInput}
                name="detailAddress"
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="대한민국"
                onChange={this.props.handleInput}
                readonly
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="연락처"
                onChange={this.props.handleInput}
                name="mobile"
              ></input>
            </div>
          </div>
          <div className="thirdBox">
            <div className="title">라코스테 선물 포장서비스</div>
            <p>
              무료로 선물포장 서비스를 제공하고 있습니다. 선물포장은 라코스테
              쇼핑백과 리본 포장이 되어 발송되며 주문하신 제품의 종류나 크기
              그리고 수량에 따라 포장 방법이 다를 수 있습니다.
            </p>
            <p>
              사이즈가 큰상품이나 많은 수량의 상품 주문시 선물 박스가 아닌
              쇼핑백에 리본포장으로 발송될 수 있는점 양해 부탁 드립니다. 위
              사항들은 교환 및 반품, 환불의 사유가 될 수 없습니다.
            </p>
            <input type="checkbox" />
            <span className="text">선물포장 추가</span>
          </div>
        </div>
        <aside className="checkedInfo">
          {cartListData &&
            cartListData.map(data => {
              return (
                <CheckedCartList
                  key={data.id}
                  checkedProductName={data.name}
                  checkedProductPrice={data.price}
                />
              );
            })}
          <PriceInfo goToNextPage={this.props.goToNextPage} />
        </aside>
      </div>
    );
  }
}
export default Delivery;
