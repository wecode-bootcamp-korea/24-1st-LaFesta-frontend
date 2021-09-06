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
      isUserRulePlusMore: false,
      isUserInfoPlusMore: false,
      pageIndex: 1,
      checkList: [
        { required: true, status: false },
        { required: true, status: false },
        { required: true, status: false },
        { required: true, status: false },
        { required: false, status: false },
      ],
    };
  }
  goToLogin = () => {
    this.props.history.push('/login');
  };

  goToNextPage = () => {
    this.state.checkList.every(checked => checked.required === checked.status)
      ? this.setState({ pageIndex: this.state.pageIndex + 1 })
      : alert('체크박스는 필수사항입니다.');
  };

  handleChange = e => {
    const newCheckList = [...this.state.checkList];
    const checkPick = this.state.checkList[e.target.id - 1];
    newCheckList.splice(e.target.id - 1, 1, !checkPick);
    this.setState({ checkList: newCheckList });
  };

  toggleUserRulePlus = () => {
    const { isUserRulePlusMore } = this.state;
    this.setState({ isUserRulePlusMore: !isUserRulePlusMore });
  };

  toggleUserInfoPlus = () => {
    const { isUserInfoPlusMore } = this.state;
    this.setState({ isUserInfoPlusMore: !isUserInfoPlusMore });
  };

  render() {
    const { isUserRulePlusMore, isUserInfoPlusMore, checkList, pageIndex } =
      this.state;
    const MAPPING_SIGNUP = {
      1: (
        <SignUpTermsUse
          isUserRulePlusMore={isUserRulePlusMore}
          isUserInfoPlusMore={isUserInfoPlusMore}
          checkList={checkList}
          toggleUserRulePlus={this.toggleUserRulePlus}
          toggleUserInfoPlus={this.toggleUserInfoPlus}
          goToNextPage={this.goToNextPage}
          handleChange={this.handleChange}
          pageIndex={pageIndex}
        />
      ),
      2: (
        <SignUpCertification
          goToNextPage={this.goToNextPage}
          next={pageIndex}
        />
      ),
      3: <SignUpUserInfo goToLogin={this.goToLogin} />,
    };

    return (
      <div className="signUp">
        <div className="backgroundBanner">{MAPPING_SIGNUP[pageIndex]}</div>
      </div>
    );
  }
}
export default SignUp;
