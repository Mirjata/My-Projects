import React from 'react';
import { Button } from 'components';
import './styles.css';

const Header = () => (
  <section className="header">
    <img className="left-decoration" src="assets/images/Header-images/Frame.png" />
    <img className="right-decoration" src="assets/images/Header-images/Right.png" />
    <div className="container">
      <div className="header-container">
        <div className="title-subtitle-container">
          <h1 className="title">Collections</h1>
          <p className="sub-title">
            You Can Explore Ans Shop Many Different Collection <br /> From Various Brands Here.
          </p>
          <Button name={'Shop Now'} color={'black'} icon={'assets/images/Header-images/Bag_alt.png'} />
        </div>
        <div className="image-container">
          <img className="header-image" src="assets/images/Header-images/image-product.png" alt="picture" />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
