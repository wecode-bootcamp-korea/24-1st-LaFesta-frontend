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

  postLogin = () => {
    const { id, pw } = this.state;
    if (
      this.state.id.includes('@') &&
      this.state.id.includes('.com') &&
      this.state.pw.length >= 8
    ) {
      fetch('http://10.58.2.219:8000/postings/posting', {
        method: 'POST',
        body: JSON.stringify({
          email: id,
          password: pw,
        }),
      })
        .then(response => response.json())
        .then(response => {
          if (response.message === 'SUCCESS') {
            this.props.history.push('/mainPage');
          } else if (response.message === 'INVALID_USER') {
            alert('이메일과 비밀번호를 다시 확인해주세요');
            this.setState({ id: '' });
            this.setState({ pw: '' });
          }
        });
    } else {
      alert('이메일 및 비밀번호를 다시 입력해주세요');
      this.setState({ id: '' });
      this.setState({ pw: '' });
    }
  };

  goToSignUp = () => {
    this.props.history.push('/SignUp');
  };

  render() {
    const { id, pw } = this.state;
    return (
      <>
        <div className="login">
          <div className="backgroudBanner">
            <div className="container">
              <div className="nav">로그인</div>
              <article>
                <div className="userId">
                  <input
                    name="id"
                    type="id"
                    placeholder="이메일/로그인:"
                    onChange={this.handleInput}
                    value={id}
                  />
                </div>
                <div className="userPw">
                  <div>
                    <input
                      type="password"
                      name="pw"
                      placeholder="비밀번호:"
                      onChange={this.handleInput}
                      value={pw}
                    />
                  </div>
                </div>
                <div>
                  <button className="loginBtn" onClick={this.postLogin}>
                    로그인
                  </button>
                  <div className="signUpText">아직 회원이 아니세요?</div>
                  <button className="loginBtn" onClick={this.goToSignUp}>
                    회원가입
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
