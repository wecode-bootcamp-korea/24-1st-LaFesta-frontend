import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
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
    const { id, pw } = this.state;
    fetch('http://10.58.2.219:8000/postings/posting', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message !== 'SUCCESS') {
          alert('이메일과 비밀번호를 다시 확인해주세요');
        }
      });
  };

  goToSignUp = () => {
    this.props.history.push('/SignUp');
  };

  render() {
    const { id, pw } = this.state;
    const goToMain = () => {
      id.includes('@') && id.includes('.com') && pw.length >= 8
        ? this.Postlogin()
        : alert('이메일 및 비밀번호를 다시 입력해주세요');
    };
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
                  />
                </div>
                <div className="userPw">
                  <div>
                    <input
                      type="password"
                      name="pw"
                      placeholder="비밀번호:"
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div>
                  <button className="loginBnt" onClick={goToMain}>
                    로그인
                  </button>
                  <div className="signUpText">아직 회원이 아니세요?</div>
                  <button className="loginBnt" onClick={this.goToSignUp}>
                    회원가입
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
