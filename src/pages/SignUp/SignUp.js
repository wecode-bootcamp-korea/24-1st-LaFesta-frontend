import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      userRulePlusClassName: 'userRulePlusOff',
      userInfoPlusClassName: 'userInfoPlusOff',
      cheakList: [],
    };
  }

  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push('/SignUp2');
    }
  };

  handleUserRulePlus = () => {
    if (this.state.userRulePlusClassName === 'userRulePlusOff') {
      this.setState({ userRulePlusClassName: 'userRulePlusOn' });
      return;
    } else {
      this.setState({ userRulePlusClassName: 'userRulePlusOff' });
      return;
    }
  };
  handleUserInfoPlus = () => {
    if (this.state.userInfoPlusClassName === 'userInfoPlusOff') {
      this.setState({ userInfoPlusClassName: 'userInfoPlusOn' });
      return;
    }
    if (this.state.userInfoPlusClassName === 'userInfoPlusOn') {
      this.setState({ userInfoPlusClassName: 'userInfoPlusOff' });
      return;
    }
  };

  render() {
    console.log(this.state.cheakList);
    return (
      <div className="SignUp">
        <div className="container">
          <div className="nav">회원가입</div>
          <div className="users">
            <div>
              <div className="user">#이용약관</div>
              <div className="user detail" onClick={this.handleUserRulePlus}>
                상세보기 +
              </div>
              <div className={this.state.userRulePlusClassName}>
                <div className="title">이용약관 & 개인정보보호정책</div>
                <div>
                  ㈜동일드방레는 라코스테 디지털 플래그십을 이용할 수 있는
                  온라인 통합 회원제를 홈페이지를 통하여 운영하고 있으며,
                  홈페이지는 2017년 3월 29일부터 기존 브랜드
                  홈페이지(www.lacoste.co.kr) 및 e-Shop(shop.lacoste.co.kr과
                  m-Shop(m.shop.lacoste.co.kr)이 www.lacoste.com/kr로
                  통합되었습니다.
                </div>
              </div>
            </div>
            <div>
              <div className="user">#개인정보수집/이용</div>
              <div className="user detail" onClick={this.handleUserInfoPlus}>
                상세보기 +
              </div>
              <div className={this.state.userInfoPlusClassName}>
                <div className="title">이용약관 & 개인정보보호정책</div>
                <div>
                  ㈜동일드방레는 라코스테 디지털 플래그십을 이용할 수 있는
                  온라인 통합 회원제를 홈페이지를 통하여 운영하고 있으며,
                  홈페이지는 2017년 3월 29일부터 기존 브랜드
                  홈페이지(www.lacoste.co.kr) 및 e-Shop(shop.lacoste.co.kr과
                  m-Shop(m.shop.lacoste.co.kr)이 www.lacoste.com/kr로
                  통합되었습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="useragreement">
            <div className="check">
              <input type="checkbox" value="false" onChange={this.clickCheak} />
              이용약관에 동의합니다 (필수)
            </div>
            <div className="check">
              <input type="checkbox" value="false" onChange={this.clickCheak} />
              개인정보 수집/이용에 동의합니다 (필수)
            </div>
            <div className="check">
              <input type="checkbox" value="false" onChange={this.clickCheak} />
              개인정보 취급 위탁동의 (구매 및 배송 등 관련) (필수)
            </div>
            <div className="check">
              <input type="checkbox" value="false" onChange={this.clickCheak} />
              개인정보 국외이전에 대한 동의 (필수)
            </div>
            <div className="check">
              <input type="checkbox" onChange={this.clickCheak} />
              마케팅 활용 개인정보 수집/이용 동의합니다 (선택)
            </div>
          </div>
          <table>
            <th>개인정보 수집 이용 목적</th>
            <th>수집하려는 개인 정보</th>
            <th>개인정보 보유, 이용기간</th>
            <tr>
              <td>
                이벤트, 신제품 출시, 쿠폰, 세일 및 광고성 뉴스레터/SMS 발송,
                소셜 미디어 회원 타겟팅 광고 등 일체의 마케팅 활동
              </td>
              <td>성명, 주소, 이메일 및 휴대전화번호</td>
              <td>수신동의 철회 접수 및 회원탈퇴 시 까지</td>
            </tr>
          </table>
          <button className="nextBnt" onClick={this.goToMain}>
            계속
          </button>
        </div>
      </div>
    );
  }
}
export default SignUp;
