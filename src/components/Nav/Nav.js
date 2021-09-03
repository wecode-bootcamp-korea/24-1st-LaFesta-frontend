import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
  }

  toggleMouse = () => {
    const { isToggleOn } = this.state;

    this.setState({
      isToggleOn: !isToggleOn,
    });
  };

  render() {
    const { isToggleOn } = this.state;
    return (
      <nav className="navContainer">
        <div className="logoWrapper">
          <Link className="logo" to="/">
            <h1>LAFESTA</h1>
            <img
              src="https://i.postimg.cc/pXWJX7kj/490crocodile-100218.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navMenu" onMouseEnter={this.toggleMouse}>
          <ul className="categorys">
            <li>
              <Link>New</Link>
            </li>
            <li>
              <Link>Men</Link>
            </li>
            <li>
              <Link>Women</Link>
            </li>
            <li>
              <Link>Kids</Link>
            </li>
            <li>
              <Link>Sale</Link>
            </li>
            <li>
              <Link>나의 라페스타 폴로</Link>
            </li>
            <li>
              <Link>Lafesta inside</Link>
            </li>
          </ul>
          <div className={isToggleOn ? 'toggleMenu' : 'toggleWrapper'}>
            <div className="robeWrappers">
              <h3>의류</h3>
              <ul>
                <li>
                  <Link>폴로</Link>
                </li>
                <li>
                  <Link>셔츠</Link>
                </li>
                <li>
                  <Link>티셔츠</Link>
                </li>
                <li>
                  <Link>니트&스웨터</Link>
                </li>
              </ul>
            </div>
            <div className="shoesWrapper">
              <h3>신발</h3>
              <ul>
                <li>
                  <Link>스포츠</Link>
                </li>
                <li>
                  <Link>캐쥬얼</Link>
                </li>
              </ul>
            </div>
            <div className="accWrapper">
              <h3>액세사리</h3>
              <ul>
                <li>
                  <Link>모자</Link>
                </li>
                <li>
                  <Link>스카프&장갑</Link>
                </li>
                <li>
                  <Link>언더웨어</Link>
                </li>
                <li>
                  <Link>양말</Link>
                </li>
              </ul>
            </div>
            <div className="leatherWrapper">
              <h3>레더굿</h3>
              <ul>
                <li>
                  <Link to="/">가방</Link>
                </li>
                <li>
                  <Link to="/">지갑</Link>
                </li>
                <li>
                  <Link to="/">벨트</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form className="searchForm">
          <button type="button">
            <i className="fas fa-search icon"></i>
          </button>
          <input type="text" aria-label="searchform" className="searchInput" />
        </form>
        <ul className="userCategorys">
          <li>
            <Link>
              <i className="fas fa-map-marker-alt icon"></i>
              <span className="a11y-hidden">map</span>
            </Link>
          </li>
          <li>
            <Link to="/logIn">
              <i className="fas fa-user icon"></i>
              <span className="a11y-hidden">user</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="a11y-hidden">cart</span>
              <i className="fas fa-shopping-cart icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
