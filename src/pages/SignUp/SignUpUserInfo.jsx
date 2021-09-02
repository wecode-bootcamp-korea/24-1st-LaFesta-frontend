import React, { Component } from 'react';
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
      pwCheck: '',
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
    const { gender, name, email, mobile, year, month, date } = this.state;
    const deleteDash = /\-/g;
    fetch('http://10.58.7.79:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        gender: gender,
        name: name,
        email: email,
        phone_number: mobile.replace(deleteDash, ''),
        birthday: year + '-' + month + '-' + date,
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
    const { name, email, mobile, year, month, date, pwCheck, gender } =
      this.state;

    const checkLogin = pw => {
      const num = /[0-9]/;
      const str = /[a-zA-Z]/;
      const special = /[~!@#$%^&*()_+|<>?:{}]/;
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
      num.test(pw) &&
      str.test(pw) &&
      special.test(pw) &&
      pw.length >= 8 &&
      pwCheck === pw
        ? this.SignUp()
        : alert('회원가입 정보를 다시 확인해주세요');
    };

    return (
      <div className="signUpUserInfo">
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
              <input name="name" type="text" onChange={this.handleInput} />
            </div>
            <div className="userEmail">
              <div className="title">E-mail</div>
              <input name="email" type="email" onChange={this.handleInput} />
            </div>
            <div className="userPhoenNumber">
              <div className="title">Mobile</div>
              <input name="mobile" type="tel" onChange={this.handleInput} />
            </div>
            <div className="userBirth">
              <div className="title">Birthdays</div>
              <div className="userBirthBox">
                <div className="year">
                  <input
                    name="year"
                    type="text"
                    placeholder="YYYY"
                    onChange={this.handleInput}
                  ></input>
                </div>
                <div className="month">
                  <input
                    name="month"
                    type="text"
                    placeholder="MM"
                    onChange={this.handleInput}
                  ></input>
                </div>
                <div className="date">
                  <input
                    name="date"
                    type="text"
                    placeholder="DD"
                    onChange={this.handleInput}
                  ></input>
                </div>
              </div>
            </div>
            <div className="userPw">
              Password
              <div>
                <input type="password" name="pw" onChange={this.handleInput} />
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
                  name="pwCheck"
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div>
              <button
                className="signUpBnt"
                onClick={() => {
                  checkLogin(this.state.pw);
                }}
              >
                가입하기
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
export default SignUpUserInfo;
