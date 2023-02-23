import React from 'react';
import {
  historyWrap,
  historyLeftContainer,
  historyImageWrap,
  historyPointsWrap,
  historyPoint,
  historyTitle,
} from './styles';
import { Title } from 'components';

const History = () => (
  <section>
    <div className="main-container">
      <div css={historyWrap}>
        <div css={historyLeftContainer}>
          <Title text={'My Story'} style={'blue'} position={'left'} color={'yellow'} />
          <p>
            Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures.
          </p>
          <div css={historyPointsWrap}>
            <div css={historyPoint}>
              <h4>01</h4>
              <div css={historyTitle}>
                <h5>Great Author Awards - 1996 & 2000</h5>
                <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
              </div>
            </div>
            <div css={historyPoint}>
              <h4>02</h4>
              <div css={historyTitle}>
                <h5>Great Author Awards - 1996 & 2000</h5>
                <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
              </div>
            </div>
            <div css={historyPoint}>
              <h4>03</h4>
              <div css={historyTitle}>
                <h5>Great Author Awards - 1996 & 2000</h5>
                <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
              </div>
            </div>
          </div>
        </div>
        <div css={historyImageWrap}>
          <img src="assets/images/AboutPage/history/Image.jpg" />
        </div>
      </div>
    </div>
  </section>
);

export default History;
