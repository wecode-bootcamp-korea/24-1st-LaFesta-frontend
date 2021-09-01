import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import './SignUpUserInfo.scss';

class SignUpUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      year: '',
      month: '',
      date: '',
      pw: '',
      pwCheack: '',
      gender: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  SignUp = () => {
    fetch('http://10.58.7.79:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        gender: this.state.gender,
        name: this.state.name,
        email: this.state.email,
        phone_number: this.state.mobile.replace(/\-/g, ''),
        birthday:
          this.state.year + '-' + this.state.month + '-' + this.state.date,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert('성공');
        } else if (response.message === 'INVALID_USER') {
          alert('이메일과 비밀번호를 다시 확인해주세요');
        }
      });
  };

  render() {
    const { name, email, mobile, year, month, date, pwCheack, gender } =
      this.state;

    const cheackLoginCall = () => {
      cheackLogin(this.state.pw);
    };

    const cheackLogin = pw => {
      const pattern1 = /[0-9]/;
      const pattern2 = /[a-zA-Z]/;
      const pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;
      gender &&
      name &&
      email.includes('@') &&
      mobile.length === 11 &&
      year > 1920 &&
      year < 2007 &&
      month > 0 &&
      month < 13 &&
      date > 0 &&
      date < 32 &&
      pattern1.test(pw) &&
      pattern2.test(pw) &&
      pattern3.test(pw) &&
      pw.length >= 8 &&
      pwCheack === pw
        ? this.SignUp()
        : alert('회원가입 정보를 다시 확인해주세요');
    };

    return (
      <div className="signUpUserInfo">
        <div className="backgroudBanner">
          <div className="container">
            <div className="nav">계정 생성을 위한 마지막 단계 입니다</div>
            <article>
              <div className="userGender">
                <div className="title">Gender</div>
                <div>
                  <span>
                    남성
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onClick={this.handleInput}
                    />
                  </span>
                  <span>
                    여성
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onClick={this.handleInput}
                    />
                  </span>
                </div>
              </div>
              <div className="userName">
                <div className="title">Name</div>
                <div>
                  <input name="name" type="text" onChange={this.handleInput} />
                </div>
              </div>
              <div className="userEmail">
                <div className="title">E-mail</div>
                <div>
                  <input
                    name="email"
                    type="email"
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div className="userPhoenNumber">
                <div className="title">Mobile</div>
                <div>
                  <input name="mobile" type="tel" onChange={this.handleInput} />
                </div>
              </div>
              <div className="userBirth">
                <div className="title">Birthdays</div>
                <div className="userBirthBox">
                  <input
                    className="year"
                    name="year"
                    type="text"
                    placeholder="YYYY"
                    onChange={this.handleInput}
                  ></input>
                  <input
                    className="month"
                    name="month"
                    type="text"
                    placeholder="MM"
                    onChange={this.handleInput}
                  ></input>
                  <input
                    className="date"
                    name="date"
                    type="text"
                    placeholder="DD"
                    onChange={this.handleInput}
                  ></input>
                </div>
              </div>
              <div className="userPw">
                Password
                <div>
                  <input
                    type="password"
                    name="pw"
                    onChange={this.handleInput}
                  />
                  <div className="pwText">
                    (영문, 숫자, 특수문자 모두 포함 8자 이상)
                  </div>
                </div>
              </div>
              <div className="userPwCheck">
                Password Check
                <div>
                  <input
                    type="password"
                    name="pwCheack"
                    onChange={this.handleInput}
                  />
                </div>
              </div>
              <div>
                <button className="signUpBnt" onClick={cheackLoginCall}>
                  가입하기
                </button>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUpUserInfo;
