import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  handleFocus = () => {
    const { focus } = this.state;
    this.setState({
      focus: !focus,
    });
  };

  handleBlur = () => {
    const { focus } = this.state;
    this.setState({
      focus: !focus,
    });
  };

  render() {
    return (
      <>
        <nav className="navContainer">
          <div className="logoWrapper">
            <a className="logo">
              <h1>LAFESTA</h1>
              <img
                src="https://i.postimg.cc/pXWJX7kj/490crocodile-100218.png"
                alt="logo"
              />
            </a>
          </div>
          <div
            className="navMeun"
            onMouseOver={this.handleFocus}
            onBlur={this.handleBlur}
          >
            <ul className="categorys">
              <li>
                <a>New</a>
              </li>
              <li>
                <a>Men</a>
              </li>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>Kids</a>
              </li>
              <li>
                <a>Sale</a>
              </li>
              <li>
                <a>나의 라페스타 폴로</a>
              </li>
              <li>
                <a>Lafesta inside</a>
              </li>
            </ul>
          </div>
          <form className="searchForm">
            <button>
              <i class="fas fa-search icon"></i>
            </button>
            <input
              type="text"
              aria-label="searchform"
              className="searchInput"
            />
          </form>
          <ul className="userCategorys">
            <li>
              <a>
                <i class="fas fa-map-marker-alt icon"></i>
                <span className="a11y-hidden">map</span>
              </a>
            </li>
            <li>
              <i class="fas fa-user icon"></i>
              <span className="a11y-hidden">user</span>
            </li>
            <li>
              <span className="a11y-hidden">cart</span>
              <i class="fas fa-shopping-cart icon"></i>
            </li>
          </ul>
        </nav>

        <section className={this.state.focus ? 'toggleMeun' : 'toggle'}>
          <div className="toggleWrapper">
            <div className="robeWrappers">
              <h3>의류</h3>
              <ul>
                <li>
                  <a>폴로</a>
                </li>
                <li>
                  <a>셔츠</a>
                </li>
                <li>
                  <a>티셔츠</a>
                </li>
                <li>
                  <a>니트&스웨터</a>
                </li>
              </ul>
            </div>
            <div className="shoesWrapper">
              <h3>신발</h3>
              <ul>
                <li>
                  <a>스포츠</a>
                </li>
                <li>
                  <a>캐쥬얼</a>
                </li>
              </ul>
            </div>
            <div className="accWrapper">
              <h3>액세사리</h3>
              <ul>
                <li>
                  <a>모자</a>
                </li>
                <li>
                  <a>스카프&장갑</a>
                </li>
                <li>
                  <a>언더웨어</a>
                </li>
                <li>
                  <a>양말</a>
                </li>
              </ul>
            </div>
            <div className="leatherWrapper">
              <h3>레더굿</h3>
              <ul>
                <li>
                  <a>가방</a>
                </li>
                <li>
                  <a>지갑</a>
                </li>
                <li>
                  <a>벨트</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Nav;
