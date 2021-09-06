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
        <div className="navMeun" onMouseEnter={this.toggleMouse}>
          <ul className="categorys">
            <li>
              <Link to="/">New</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
            <li>
              <Link to="/">Women</Link>
            </li>
            <li>
              <Link to="/">Kids</Link>
            </li>
            <li>
              <Link to="/">Sale</Link>
            </li>
            <li>
              <Link to="/">나의 라페스타 폴로</Link>
            </li>
            <li>
              <Link to="/">Lafesta inside</Link>
            </li>
          </ul>
          <div className={isToggleOn ? 'toggleMeun' : 'toggleWrapper'}>
            <div className="robeWrappers">
              <h3>의류</h3>
              <ul>
                <li>
                  <Link to="/">폴로</Link>
                </li>
                <li>
                  <Link to="/">셔츠</Link>
                </li>
                <li>
                  <Link to="/">티셔츠</Link>
                </li>
                <li>
                  <Link to="/">니트&스웨터</Link>
                </li>
              </ul>
            </div>
            <div className="shoesWrapper">
              <h3>신발</h3>
              <ul>
                <li>
                  <Link to="/">스포츠</Link>
                </li>
                <li>
                  <Link to="/">캐쥬얼</Link>
                </li>
              </ul>
            </div>
            <div className="accWrapper">
              <h3>액세사리</h3>
              <ul>
                <li>
                  <Link to="/">모자</Link>
                </li>
                <li>
                  <Link to="/">스카프&장갑</Link>
                </li>
                <li>
                  <Link to="/">언더웨어</Link>
                </li>
                <li>
                  <Link to="/">양말</Link>
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
          <button>
            <i className="fas fa-search icon"></i>
          </button>
          <input type="text" aria-label="searchform" className="searchInput" />
        </form>
        <ul className="userCategorys">
          <li>
            <Link to="/">
              <i className="fas fa-map-marker-alt icon"></i>
              <span className="a11y-hidden">map</span>
            </Link>
          </li>
          <li>
            <i className="fas fa-user icon"></i>
            <span className="a11y-hidden">user</span>
          </li>
          <li>
            <span className="a11y-hidden">cart</span>
            <i className="fas fa-shopping-cart icon"></i>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
