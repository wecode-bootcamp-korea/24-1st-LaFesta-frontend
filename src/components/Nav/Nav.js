import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Category from './Category/Category';
import PopUp from '../PopUp/PopUp';
import Form from '../Form/Form';
import '../Nav/Nav.scss';

const clothesCategory = [
  {
    name: '폴로',
    id: 'clothes1',
  },
  {
    name: '셔츠',
    id: 'clothes2',
  },
  {
    name: '티셔츠',
    id: 'clothes3',
  },
  {
    name: '니트 & 스웨터',
    id: 'clothes4',
  },
  {
    name: '후드 & 스웻셔츠',
    id: 'clothes5',
  },
  { name: '자켓 & 코트', id: 'clothes5' },
  {
    name: '바지 & 반바지',
    id: 'clothes6',
  },
  {
    name: '스포츠웨어',
    id: 'clothes7',
  },
];

const shoesCategory = [
  { name: '스포츠', id: 'shoes1' },
  { name: '캐쥬얼', id: 'shoes2' },
];

const accCategory = [
  { name: '모자', id: 'acc1' },
  { name: '스카프 & 장갑', id: 'acc2' },
  { name: '언더웨어', id: 'acc3' },
  { name: '양말', id: 'acc4' },
];

const goodsCategory = [
  { name: '가방', id: 'good1' },
  { name: '지갑', id: 'good2' },
  { name: '벨트', id: 'good3' },
];

const collectionCategory = [
  { name: '라이브 컬렉션', id: 'collection1' },
  { name: '스포츠 컬렉션', id: 'collection2' },
];

const brandCategory = [
  { name: '우리는 함께 합니다.', id: 'brand1' },
  { name: '건강한 우아함', id: 'brand2' },
  { name: '르네 라페스타', id: 'brand3' },
  { name: '라페스타 스토리', id: 'brand3' },
  { name: '라페스타의 비밀', id: 'brand3' },
];

const styleCategory = [
  { name: '콜라보레이션', id: 'style1' },
  { name: 'MyLafestaPolo', id: 'style2' },
  { name: '패션쇼', id: 'style3' },
  { name: '레더굿', id: 'style4' },
];

const sportsCategory = [
  { name: '노박 조코비치', id: 'sports1' },
  { name: '스포츠 스토어', id: 'sports2' },
  { name: '롤랑 가로스', id: 'sports3' },
];

const categories = [
  { name: '의류', id: 'category1', categories: clothesCategory },
  { name: '신발', id: 'category2', categories: shoesCategory },
  { name: '악세사리', id: 'category3', categories: accCategory },
  { name: '레더굿', id: 'category4', categories: collectionCategory },
];

const menu = [
  {
    name: 'New',
    id: 'menu1',
    subMenu: [
      {
        name: '남성',
        id: 'menu1-1',
        categories: categories.map(item => ({ name: item.name, id: item.id })),
      },
      {
        name: '여성',
        id: 'menu1-2',
        categories: categories.map(item => ({ name: item.name, id: item.id })),
      },
      {
        name: 'L!VE & SPORTS',
        id: 'menu1-3',
        categories: [
          { name: '라이브 컬렉션', id: 'category5' },
          { name: '스포츠 컬렉션', id: 'category6' },
        ],
      },
      {
        name: '신상품 전체',
        id: 'menu1-4',
        categories: [
          { name: '남성 전체', id: 'category7' },
          { name: '여성 전체', id: 'category8' },
        ],
      },
    ],
  },
  {
    name: 'Men',
    id: 'menu2',
    subMenu: categories,
  },
  {
    name: 'Women',
    id: 'menu3',
    subMenu: categories,
  },
  {
    name: 'Sale',
    id: 'menu4',
    subMenu: [
      { name: '남성 세일', id: 'menu4-1', categories: clothesCategory },
      { name: '여성 세일', id: 'menu4-2', categories: clothesCategory },
    ],
  },
  {
    name: 'Lafesta Inside',
    id: 'menu5',
    subMenu: [
      { name: 'BRAND', id: 'menu4-1', categories: brandCategory },
      { name: 'STYLE', id: 'menu4-2', categories: styleCategory },
      { name: 'SPORTS', id: 'menu4-2', categories: sportsCategory },
    ],
  },
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: '',
      isUserLogin: false,
      isClicked: false,
    };
  }

  handleMouseOver = event => {
    this.setState({
      toggleMenu: event.target.innerText,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      toggleMenu: '',
    });
  };

  handleUserMouseLeave = () => {
    const { isUserLogin } = this.state;

    this.props.history.push('/login');

    this.setState({
      isUserLogin: false,
    });
  };

  handleUserPopUp = () => {
    this.setState({
      isUserLogin: localStorage.getItem('token') !== '',
    });
    this.props.history.push('/');
  };

  hadleClick = () => {
    const { isClicked } = this.state;

    this.setState({
      isClicked: !isClicked,
    });
  };

  goToLogin = () => {
    this.props.history.push('/login');
  };

  render() {
    const { toggleMenu, isUserLogin, isClicked } = this.state;
    const toggledMenu = menu.find(item => item.name === toggleMenu);
    return (
      <>
        <nav className="navContainer">
          <div className="logoWrapper">
            <Link className="logo" to="/">
              <img
                src="https://i.postimg.cc/Cx92S8yJ/removebg-preview.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navMenu">
            <ul className="categorys" onMouseOver={this.handleMouseOver}>
              {menu.map(item => (
                <li key={item.id}>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <button type="button" onClick={this.hadleClick}>
              <i className="fas fa-search icon"></i>
            </button>
          </div>
          <div className="userWrapper">
            <ul className="userCategorys">
              <li>
                <Link>
                  <i className="fas fa-map-marker-alt icon"></i>
                  <span className="a11y-hidden">map</span>
                </Link>
              </li>
              <li>
                {localStorage.getItem('token') ? (
                  <button onMouseOver={this.handleUserPopUp}>
                    <i className="fas fa-user icon"></i>
                    <span className="a11y-hidden">user</span>
                  </button>
                ) : (
                  <button type="button" onClick={this.goToLogin}>
                    <i className="fas fa-user icon"></i>
                    <span className="a11y-hidden">user</span>
                  </button>
                )}
              </li>
              <li>
                <Link to="/cart">
                  <i className="fas fa-shopping-cart icon"></i>
                  <span className="a11y-hidden">cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="showMenuWrapper" onMouseLeave={this.handleMouseLeave}>
          <ul className={`subMenu ${toggledMenu ? 'showMenu' : ''}`}>
            {toggledMenu &&
              toggledMenu.subMenu.map(items => (
                <Category key={items.id} className="showItem" items={items} />
              ))}
          </ul>
        </div>
        <div
          onMouseLeave={this.handleUserMouseLeave}
          style={{ position: 'relative' }}
        >
          {isUserLogin && <PopUp name={localStorage.getItem('user_name')} />}
        </div>
        {isClicked && <Form clicked={isClicked} />}
      </>
    );
  }
}

export default withRouter(Nav);
