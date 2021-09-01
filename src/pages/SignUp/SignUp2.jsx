import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import './SignUp2.scss';

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  headleChange = e => {
    this.setState({ checked: e.target.checked });
  };

  goToNext = () => {
    if (this.state.checked) {
      this.props.history.push('/SignUp3');
    } else {
      alert('체크박스는 필수사항입니다');
    }
  };

  render() {
    return (
      <div className="signUp2">
        <div className="container">
          <div className="nav">회원가입</div>
          <div className="usercertification">본인인증</div>
          <div className="age">
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.headleChange}
            />
            <p></p>
            14세 이상
          </div>
          <div className="detail one">
            LACOSTE DIGITAL FLAGSHIP 은 깨끗하고 안전한 인터넷 환경 조성과
            소중한 회원님의 개인정보 보호를 위하여 주민등록법 제21조 제2항
            제9호(시행일 2006년 9월 25일), 정보통신망 이용촉진 및 정보보호 등에
            관한 법률 제44조의 5항(2007년7월27일 시행)에 의거, 회원가입 시
            본인확인 절차를 거치고 있습니다.
          </div>
          <div>
            <button className="certificationBnt" onClick={this.goToNext}>
              계속
            </button>
          </div>
          <div className="detail two">
            「정보통신 이용 촉진 및 정보보호 등에 관한 법률(이하 정보통신망법)
            」제 23조의 2”주민등록번호의 사용 제한”에 따라 저희 LACOSTE 모든
            사이트에서는 주민등록번호를 받지 않습니다. 본인인증을 위해 입력하신
            개인정보는 본인인증기관에서 수집하는 정보이며, 이때 수집된 정보는
            본인인증 외 어떤 용도로도 이용되거나 별도 저장되지 않습니다. 만 14세
            미만 고객께서는 보호자(법정대리인)와 같이 가입해주시기 바랍니다.
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp2;
