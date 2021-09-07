import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainItem.scss';

class MainItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        <Link to="#">
          <figure>
            <img src={item.url} alt={item.title} />
            <figcaption className={`${item.category}Content`}>
              <h3>{item.title}</h3>
              <strong>{item.content}</strong>
              <button type="button">
                {item.category === 'collection' ? '구매하기' : '자세히 보기'}
              </button>
            </figcaption>
          </figure>
        </Link>
      </li>
    );
  }
}

export default MainItem;
