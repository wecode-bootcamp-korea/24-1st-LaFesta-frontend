import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      em: '',
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
        if (response.message === 'SUCCESS') {
          alert('성공');
        } else if (response.message === 'INVALID_USER') {
          alert('이메일과 비밀번호를 다시 확인해주세요');
        }
      });
  };

  render() {
    const { id, pw, em } = this.state;
    const goToMain = () => {
      id.includes('@') && pw.length >= 8
        ? this.Postlogin()
        : alert('아이디 및 비밀번호를 다시 입력해주세요');
    };
    const goToSignUp = () => {
      em.includes('@') && em.includes('.com')
        ? this.props.history.push('/SignUp')
        : alert('이메일을 다시 확인해주세요');
    };
    return (
      <>
        <div className="Login">
          <div className="backgroudBanner">
            <div className="container">
              <div className="nav">로그인</div>
              <article>
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
                    <div calssName="loginBtnBox">
                      <span className="idSaveBox">
                        <span className="idSaveBoxText">아이디 저장</span>
                        <input calssName="idSaveInput" type="checkbox" />
                      </span>
                      <button onClick={goToMain}>로그인</button>
                    </div>
                  </div>
                  <div className="newUserBox">
                    <div className="newUserTitle">신규 고객</div>
                    <div>
                      <input
                        className="inputEm"
                        type="text"
                        placeholder="이메일:"
                        name="em"
                        onChange={this.handleInput}
                      />
                    </div>
                    <div>
                      <button onClick={goToSignUp}>계정 만들기</button>
                    </div>
                  </div>
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
