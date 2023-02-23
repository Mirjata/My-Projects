import React from 'react';
import { Title } from 'components';
import { trustedBy, trustedByCompanyImages } from './styles';

const TrustedBy = () => (
  <section css={trustedBy}>
    <div className="main-container">
      <Title text={'Trusted by the Best'} style={'blue'} position={'center'} color={'yellow'} />
      <div css={trustedByCompanyImages}>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo.png" />
          <div className="trusted-by-description">
            <h5>Amazon Corp</h5>
            <p>A long established fact that a who looking at its layout.</p>
          </div>
        </div>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo-2.png" />
          <div className="trusted-by-description">
            <h5>Amazon Corp</h5>
            <p>A long established fact that a who looking at its layout.</p>
          </div>
        </div>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo-3.png" />
          <div className="trusted-by-description">
            <h5>Amazon Corp</h5>
            <p>A long established fact that a who looking at its layout.</p>
          </div>
        </div>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo-4.png" />
          <div className="trusted-by-description">
            <h5>Amazon Corp</h5>
            <p>A long established fact that a who looking at its layout.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrustedBy;
