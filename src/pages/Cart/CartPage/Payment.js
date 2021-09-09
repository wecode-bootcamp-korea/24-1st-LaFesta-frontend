import React, { Component } from 'react';
import CheckedPriceInfo from '../CartComponent/CheckedPriceInfo';
import './Payment.scss';

class Payment extends Component {
  render() {
    const {
      cartListData,
      name,
      gender,
      zipCode,
      address,
      detailAddress,
      mobile,
    } = this.props;
    return (
      <div className="payment">
        <section className="paymentDisplay">
          <div className="howToPayment">결제 방법</div>
          <div className="wayToPayment">
            <input type="radio" name="paymentBtn"></input>
            <div>네이버페이</div>
          </div>
          <div className="wayToPayment">
            <input type="radio" name="paymentBtn"></input>
            <div>신용카드/카카오페이 (모바일 ISP 결제불가)</div>
          </div>
          <div className="wayToPayment">
            <input type="radio" name="paymentBtn"></input>
            <div>실시간계좌이체</div>
          </div>
        </section>
        <CheckedPriceInfo
          cartListData={cartListData}
          name={name}
          gender={gender}
          zipCode={zipCode}
          address={address}
          detailAddress={detailAddress}
          mobile={mobile}
        />
      </div>
    );
  }
}

export default Payment;
