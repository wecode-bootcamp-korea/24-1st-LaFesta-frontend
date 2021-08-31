import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
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

        <form className="searchForm">
          <button>
            <i class="fas fa-search"></i>
          </button>
          <input type="text" aria-label="searchform" className="searchInput" />
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
    );
  }
}

export default Nav;
