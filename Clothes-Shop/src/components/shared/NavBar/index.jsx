import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NavBar = () => (
  <nav className="nav-bar">
    <div className="container">
      <ul className="nav-list">
        <li className="list-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" activeClassName="active" to="products">
            Product
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" activeClassName="active" to="wishlist">
            Wishlist
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
