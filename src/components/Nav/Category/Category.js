import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';

class Category extends Component {
  render() {
    const { items } = this.props;
    return (
      <li key={items.id} className="showItem">
        <span>{items.name}</span>
        <ul className="subMenuCategries">
          {items.categories.map(item => (
            <Link to="/productList">
              <li key={item.id}>{item.name}</li>
            </Link>
          ))}
        </ul>
      </li>
    );
  }
}

export default Category;
