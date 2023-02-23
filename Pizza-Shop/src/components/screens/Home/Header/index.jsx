import React from 'react';
import { Button } from 'components';
import './styles.css';

const Header = () => (
  <section className="header">
    <h1 className="header-title">Friday pizza!</h1>
    <h5 className="header-subtitle">Time to enjoy our delicious pizza.</h5>
    <Button name={'ORDER NOW'} size="large" />
  </section>
);

export default Header;
