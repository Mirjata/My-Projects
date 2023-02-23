import { Button } from 'components';
import React from 'react';
import './styles.css';

const Banner = () => (
  <div className="banner-container">
    <div className="container">
      <div className="zara-container">
        <div>
          <img className="zara-logo" src="assets/images/About-banner/1024px-Zara_Logo 2.png" />
          {/* <img className="zara-logo-2" src="assets/images/About-banner/1024px-Zara_Logo 1.png" /> */}
          <p className="zara-text">
            Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani
            boutique in Los Angeles.
          </p>
          <Button name={'See Collection'} color={'white'} />
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
