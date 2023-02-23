import React from 'react';
import { Title } from 'components';
import { BannerWrap, SubTitle } from './styles';

const Banner = ({ title, position, color, style }) => (
  <section css={BannerWrap}>
    <div className="main-container">
      <Title text={title} position={position} color={color} style={style} />
      <p css={SubTitle}>
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.
      </p>
    </div>
  </section>
);

export default Banner;
