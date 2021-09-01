import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  Postlogin = () => {
    fetch('http://10.58.2.219:8000/postings/posting', {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.id,
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
    console.log(this.state);
    return (
      <div className="Login">
        <div className="container">
          <div className="nav">로그인</div>
          <div className="loginBox">
            <div className="oldUserBox">
              <div className="oldUserTitle">기존 고객</div>
              <div>
                <input
                  className="inputId"
                  name="id"
                  type="text"
                  placeholder="이메일/로그인:"
                  onChange={this.handleInput}
                />
              </div>
              <div>
                <input
                  className="inputPw"
                  name="pw"
                  type="password"
                  placeholder="비밀번호:"
                  onChange={this.handleInput}
                />
              </div>
              <div>
                <span className="idSaveBox">
                  <span className="idSaveBoxText">아이디 저장</span>
                  <input calssName="idSaveInput" type="checkbox" />
                </span>
                <button onClick={this.goToMain}>로그인</button>
              </div>
            </div>
            <div className="newUserBox">
              <div className="newUserTitle">신규 고객</div>
              <div>
                <input className="inputEm" type="text" placeholder="이메일:" />
              </div>
              <div>
                <button>계정 만들기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
