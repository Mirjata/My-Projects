import React from 'react';
import { Title } from 'components';
import {
  aboutAuthor,
  aboutAuthorWrap,
  aboutAuthorContent,
  authorStatisticWrap,
  authorStatisticPoints,
  authorContacts,
} from './styles';

const AboutAuthor = () => (
  <section css={aboutAuthor}>
    <div className="main-container">
      <div css={aboutAuthorWrap}>
        <div className="aboutAuthorImage">
          <img src="/assets/images/HomePage/AboutAuthor/Image.png" />
        </div>
        <div css={aboutAuthorContent}>
          <Title text={'About Author'} style={'blue'} position={'left'} color={'yellow'} />
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary, making this
            the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            a handful.
          </p>
          <div css={authorStatisticWrap}>
            <div>
              <h2 css={authorStatisticPoints}>02</h2>
              <p>Books Published</p>
            </div>
            <div className="separation" />
            <div>
              <h2 css={authorStatisticPoints}>4.5</h2>
              <p>User Reviews</p>
            </div>
            <div className="separation" />
            <div>
              <h2 css={authorStatisticPoints}>04</h2>
              <p>Best Seller Awards</p>
            </div>
          </div>
          <div css={authorContacts}>
            <img src="assets/images/AboutPage/QR.png" />
            <div>
              <h5>John Abraham , Ph.d</h5>
              <p>Mail : johnabraham@gmail.com</p>
              <p>Phone : (+2) 123 545 9000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutAuthor;
