import React, { Component } from 'react';
import SignUpTermsUse from './SignUpTermsUse';
import SignUpCertification from './SignUpCertification';
import SignUpUserInfo from './SignUpUserInfo';
import Footer from '../../components/Footer/Footer';
import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      userRulePlusClassName: false,
      userInfoPlusClassName: false,
      ischecked: false,
      next: 1,
    };
  }

  goToNext = id => {
    this.setState({ next: id });
  };

  headleChange = e => {
    this.setState({ ischecked: e.target.checked });
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
          ischecked={this.state.ischecked}
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
      3: <SignUpUserInfo />,
    };

    return (
      <div className="signUp">
        <div className="backgroudBanner">{MAPPING_SIGNUP[this.state.next]}</div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
