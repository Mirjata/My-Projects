import React, { useState } from 'react';
import { Button } from 'components/UI';
import { FaShoppingCart } from 'react-icons/fa';

import {
  ItemWrap,
  ItemImageWrap,
  ItemDescriptionWrap,
  ItemPrice,
  ButtonWrap,
  AdditionalInfoWrap,
  FooterWrap,
  Footer,
  FooterIcon,
  ShoppingIcon,
} from './styles';

const SingleProduct = () => {
  const [active, setActive] = useState(false);

  return (
    <section>
      <div className="main-container">
        <div css={ItemWrap}>
          <div css={ItemImageWrap}>
            <img src="assets/images/HomePage/AuthorBook/Book-new.png" />
          </div>
          <div css={ItemDescriptionWrap}>
            <h4>The Atomic One</h4>
            <p css={ItemPrice}>$30.00 usd</p>
            <p>
              Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
              combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
              generated Lorem Ipsum.
            </p>
            <p> Publisher : Learning Private Limited (1 January 2021)</p>
            <p> Language : English</p>
            <p>Paperback : 212 pages</p>
            <p> ISBN-10 : 9788120345799</p>
            <p>Dimensions : 20 x 14 x 4 cm</p>
            <div css={ButtonWrap}>
              <div>1</div>
              <Button type="secondary">
                <div css={ShoppingIcon}>
                  <FaShoppingCart />
                </div>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div css={AdditionalInfoWrap}>
          <button className={!active ? 'btn-active' : 'btn-non-active'} onClick={() => setActive(false)}>
            PRODUCT DESCRIPTION
          </button>
          <button className={active ? 'btn-active' : 'btn-non-active'} onClick={() => setActive(true)}>
            ADDITIONAL INFO
          </button>
          {!active ? (
            <p>
              Nowadays English language section is asked in almost all competitive and recruitment examinations like
              SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is
              necessary in this fast-modernizing world of disruptive innovation via the workplace.
            </p>
          ) : (
            <p>
              This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The
              present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle,
              Gerund, Preposition, Conjunctions disruptive innovation via the workplace.
            </p>
          )}
        </div>
      </div>
      <div css={FooterWrap}>
        <div className="main-container">
          <div css={Footer}>
            <ul>
              <li>
                <div css={FooterIcon}>
                  <img src="/assets/images/AboutPage/Secure.svg" />
                </div>
                <h5>Secure Payments</h5>
                <p>There are many variations of passages of alteration in some form.</p>
              </li>
              <li>
                <div css={FooterIcon}>
                  <img src="/assets/images/AboutPage/Shipping.svg" />
                </div>
                <h5>Free Shipping</h5>
                <p>There are many variations of passages of alteration in some form.</p>
              </li>
              <li>
                <div css={FooterIcon}>
                  <img src="/assets/images/AboutPage/Satisfaction.svg" />
                </div>
                <h5>100% Satisfactions</h5>
                <p>There are many variations of passages of alteration in some form.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
