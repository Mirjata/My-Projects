import React from 'react';
import { Button } from 'components';
import {
  wrapper,
  bannerWrap,
  bannerLeftContainer,
  bannerImageContainer,
  bannerDetails,
  bannerHeadline,
  bannerDescription,
  itemTitle,
  itemContent,
  bannerLine,
  lineWrap,
  bannerButtonsWrap,
} from './styles';
import { NavLink, useHistory } from 'react-router-dom';

const HomeBanner = () => {
  const redirect = useHistory();
  return (
    <section css={wrapper}>
      <div className="main-container">
        <div css={bannerWrap}>
          <div css={bannerLeftContainer}>
            <div>
              <div css={lineWrap}>
                <div css={bannerLine} />
                <p className="hpg-banner-subtitle">Welcome to Pages</p>
              </div>
            </div>
            <h1 css={bannerHeadline}>Books are uniquely portable magic</h1>
            <p css={bannerDescription}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form.
            </p>
            <div css={bannerButtonsWrap}>
              <Button
                hoverTextColor="white"
                type="secondary"
                onClick={() => {
                  redirect.push('/store');
                }}
              >
                Order Today
              </Button>
              <NavLink exact to={'/contacts'}>
                Read Free Demo
              </NavLink>
            </div>
            <ul css={bannerDetails}>
              {[...Array(3)].map((_, i) => (
                <li key={i} className="item">
                  <div className="item-dot" />
                  <div>
                    <h5 css={itemTitle}>Pages:</h5>
                    <p css={itemContent}>586pages</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div css={bannerImageContainer}>
            <img src="/assets/images/HomePage/Banner/Book.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
