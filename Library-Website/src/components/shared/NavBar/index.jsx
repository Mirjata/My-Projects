import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Dropdown } from 'components';
import { FaShoppingCart, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {
  navBarSection,
  navBarWrap,
  navBarIcon,
  navBarIconWrap,
  linksWrap,
  navLink,
  itemCount,
  cartButton,
} from './styles.js';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const redirect = useHistory();
  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

  return (
    <section css={navBarSection}>
      <div className="main-container">
        <div css={navBarWrap}>
          <div className="logo-wrap">
            <img src="assets/images/NavBar/Logo.png" />
            <div css={navBarIconWrap}>
              <div css={navBarIcon}>
                <FaFacebookF />
              </div>
              <div css={navBarIcon}>
                <FaTwitter />
              </div>
              <div css={navBarIcon}>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <ul css={linksWrap}>
            <li>
              <NavLink css={navLink} activeClassName="active" exact to="/">
                Home
              </NavLink>
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <div css={navLink}>Pages</div>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <NavLink css={navLink} activeClassName="active" exact to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink css={navLink} activeClassName="active" exact to="/contacts">
                Contact
              </NavLink>
            </li>
            <li>
              <button css={cartButton}>
                <FaShoppingCart />
                <p css={itemCount}>3</p>
              </button>
            </li>
            <li>
              <Button
                hoverTextColor="white"
                type="secondary"
                onClick={() => {
                  redirect.push('/store');
                }}
              >
                Order Today
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
