import React, { Component } from 'react';
import SignUpTermsUse from './SignUpTermsUse';
import SignUpCertification from './SignUpCertification';
import SignUpUserInfo from './SignUpUserInfo';
import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      userRulePlusClassName: false,
      userInfoPlusClassName: false,
      next: 1,
      checkList: [false, false, false, false, false],
    };
  }
  goToLogin = () => {
    this.props.history.push('/login');
  };
  goToNext = id => {
    this.state.checkList[0] &&
    this.state.checkList[1] &&
    this.state.checkList[2] &&
    this.state.checkList[3]
      ? this.setState({ next: id })
      : alert('체크박스는 필수사항입니다.');
  };

  headleChange = e => {
    const newCheckList = [...this.state.checkList];
    const checkPick = this.state.checkList[e.target.id - 1];
    newCheckList.splice(e.target.id - 1, 1, !checkPick);
    this.setState({ checkList: newCheckList });
  };

  toggleUserRulePlus = () => {
    const { userRulePlusClassName } = this.state;
    this.setState({ userRulePlusClassName: !userRulePlusClassName });
  };

  toggleUserInfoPlus = () => {
    const { userInfoPlusClassName } = this.state;
    this.setState({ userInfoPlusClassName: !userInfoPlusClassName });
  };

  render() {
    const MAPPING_SIGNUP = {
      1: (
        <SignUpTermsUse
          userRulePlusClassName={this.state.userRulePlusClassName}
          userInfoPlusClassName={this.state.userInfoPlusClassName}
          checkList={this.state.checkList}
          toggleUserRulePlus={this.toggleUserRulePlus}
          toggleUserInfoPlus={this.toggleUserInfoPlus}
          goToNext={this.goToNext}
          headleChange={this.headleChange}
          next={this.state.next}
        />
      ),
      2: (
        <SignUpCertification goToNext={this.goToNext} next={this.state.next} />
      ),
      3: <SignUpUserInfo goToLogin={this.goToLogin} />,
    };

    return (
      <div className="signUp">
        <div className="backgroudBanner">{MAPPING_SIGNUP[this.state.next]}</div>
      </div>
    );
  }
}
export default SignUp;
