import React from 'react';
import { Title } from 'components';
import { trustedBy, trustedByCompanyImages, trustedByDescriptionWrap } from './styles';

const AboutTrustedBy = () => (
  <section css={trustedBy}>
    <div className="main-container">
      <Title text={'Trusted by the Best'} style={'blue'} position={'center'} color={'yellow'} />
      <div css={trustedByCompanyImages}>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo.png" />
        </div>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo-2.png" />
        </div>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo-3.png" />
        </div>
        <div className="trusted-by-image">
          <img src="/assets/images/HomePage/TrustedBy/Logo-4.png" />
        </div>
      </div>
      <div css={trustedByDescriptionWrap}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="trusted-by-description">
            <h5>Amazen Corp</h5>
            <p>A long established fact that a who looking at its layout.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutTrustedBy;
