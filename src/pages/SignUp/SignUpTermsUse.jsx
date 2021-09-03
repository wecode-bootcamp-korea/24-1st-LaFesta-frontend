import React, { Component } from 'react';
import Check from './Check';
import USERRULE_DATA from './USERRULE_DATA';
import USERINFO_DATA from './USERRULE_DATA';
import './SignUpTermsUse.scss';

class SignUpTermsUse extends Component {
  render() {
    return (
      <div className="signUpTermsUse">
        <div className="container">
          <div className="nav">회원가입</div>
          <div className="users">
            <div>
              <div className="user">#이용약관</div>
              <div
                className="user detail"
                onClick={this.props.toggleUserRulePlus}
              >
                상세보기 +
              </div>
              <div
                className={
                  this.props.userRulePlusClassName
                    ? 'userRulePlusOn'
                    : 'userRulePlusOff'
                }
              >
                <div className="title">이용약관 & 개인정보보호정책</div>
                <div>
                  {USERRULE_DATA.map(userRule => {
                    return <p key={userRule.id}>{userRule.text}</p>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="user">#개인정보수집/이용</div>
              <div
                className="user detail"
                onClick={this.props.toggleUserInfoPlus}
              >
                상세보기 +
              </div>
              <div
                className={
                  this.props.userInfoPlusClassName
                    ? 'userInfoPlusOn'
                    : 'userInfoPlusOff'
                }
              >
                <div className="title">개인정보 처리방침</div>
                <div>
                  {USERINFO_DATA.map(userInfo => {
                    return <p key={userInfo.id}>{userInfo.text}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="userAgreement">
            <Check
              checkList={this.props.checkList[0]}
              headleChange={this.props.headleChange}
              text="이용약관에 동의합니다 (필수)"
              id="1"
            />
            <Check
              checkList={this.props.checkList[1]}
              headleChange={this.props.headleChange}
              text="개인정보 수집/이용에 동의합니다 (필수)"
              id="2"
            />
            <Check
              checkList={this.props.checkList[2]}
              headleChange={this.props.headleChange}
              text="개인정보 취급 위탁동의 (구매 및 배송 등 관련) (필수)"
              id="3"
            />
            <Check
              checkList={this.props.checkList[3]}
              headleChange={this.props.headleChange}
              text="개인정보 국외이전에 대한 동의 (필수)"
              id="4"
            />
            <Check
              checkList={this.props.checkList[4]}
              headleChange={this.props.headleChange}
              text="마케팅 활용 개인정보 수집/이용 동의합니다 (선택)"
              id="5"
            />
          </div>
          <table>
            <tr>
              <th>개인정보 수집 이용 목적</th>
              <th>수집하려는 개인 정보</th>
              <th>개인정보 보유, 이용기간</th>
            </tr>
            <tr>
              <td>
                이벤트, 신제품 출시, 쿠폰, 세일 및 광고성 뉴스레터/SMS 발송,
                소셜 미디어 회원 타겟팅 광고 등 일체의 마케팅 활동
              </td>
              <td>성명, 주소, 이메일 및 휴대전화번호</td>
              <td>수신동의 철회 접수 및 회원탈퇴 시 까지</td>
            </tr>
          </table>
          <div className="btn">
            <button className="nextBtn" onClick={() => this.props.goToNext(2)}>
              계속
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpTermsUse;
