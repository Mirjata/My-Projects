import React from 'react';
import { Banner } from 'components';
import { ArticleWrap, ThePerfectBook, ListDecoration, MiddleBanner, ThePerfectBookSecond } from './styles';

const ArticlePage = () => (
  <section>
    <Banner title={'Significant reading has more info number'} style={'white'} position={'center'} color={'yellow'} />
    <div className="main-container">
      <div css={ArticleWrap}>
        <img src="assets/images/ArticlePage.png" />
        <h6>October 6, 2021 / Classics</h6>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majorithave suffered alteration in
          some form, by injected humour, or randomised words which do not look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, need to be sure there is not anything embarrassing hidden in the middle
          of text. All thLorem Ipsum generators on the Internet tend.
        </p>
        <div css={ThePerfectBook}>
          <h4>The perfect book for all</h4>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as
            opposed.
          </p>
          <ul>
            <li>
              <div css={ListDecoration} />
              It has roots in a piece of classical Latin literature from 45 BC,
            </li>
            <li>
              <div css={ListDecoration} />
              To generate Lorem Ipsum which looks reasonable
            </li>
            <li>
              <div css={ListDecoration} />
              The first line of Lorem Ipsum, Lorem ipsum” dolor sit amet
            </li>
          </ul>
        </div>
        <div css={MiddleBanner}>
          <img src="assets/images/quotes.png" />
          <p>“Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channels.”</p>
        </div>
        <div css={ThePerfectBookSecond}>
          <h4>The perfect book for all</h4>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as
            opposed.
          </p>
          <ol>
            <li>It has roots in a piece of classical Latin literature from 45 BC,</li>
            <li>To generate Lorem Ipsum which looks reasonable</li>
            <li>The first line of Lorem Ipsum, Lorem ipsum” dolor sit amet</li>
            <li>Be standard chunk of Lorem used since the 1500s</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default ArticlePage;
