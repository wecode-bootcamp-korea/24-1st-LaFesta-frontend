import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainItem.scss';

class MainItem extends Component {
  render() {
    const { item } = this.props;
    const { url, title, category, content } = item;
    return (
      <li>
        <Link to="#">
          <figure>
            <img src={url} alt={title} />
            <figcaption className={`${category}Content`}>
              <h3>{title}</h3>
              <strong>{content}</strong>
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
