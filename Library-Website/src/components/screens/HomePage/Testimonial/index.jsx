import React from 'react';
import { Title } from 'components';
import { tm, tmWrap, tmColLeft, tmColRight, tmColRightWrap, tmRating, tmItem, tmTitle } from './styles';

const Testimonial = () => (
  <section css={tm}>
    <div className="main-container">
      <div css={tmWrap}>
        <div css={tmColLeft}>
          <div css={tmTitle}>
            <Title text={'What Readers Say About the Book'} position={'left'} style={'blue'} color={'yellow'} />
          </div>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators.
          </p>
          <div css={tmRating}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="tm-rating-point" />
            ))}
            <h5>(5/5)</h5>
          </div>
          <p>Overall Customer Rating</p>
        </div>
        <div css={tmColRight}>
          <div css={tmColRightWrap}>
            {[...Array(2)].map((_, i) => (
              <div key={i}>
                <div css={tmItem}>
                  <div className="review-image">
                    <img src="/assets/images/HomePage/Review/Image.png" />
                  </div>
                  <h4 className="review-name">Martin Philips</h4>
                  <h5 className="review">Awesome Impact</h5>
                  <p className="review-text">
                    All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div css={tmColRightWrap}>
              <div css={tmItem}>
                <div className="review-image">
                  <img src="/assets/images/HomePage/Review/Image.png" />
                </div>
                <h4 className="review-name">Martin Philips</h4>
                <h5 className="review">Awesome Impact</h5>
                <p className="review-text">
                  All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
