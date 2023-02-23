import React from 'react';
import { Title } from 'components';
import { wlSection, wlImage, wlRows, wlCols, wlItem } from './styles';

const WhatLearn = () => (
  <section css={wlSection}>
    <div className="main-container">
      <Title text={'What will you learn?'} style={'blue'} position={'center'} color={'yellow'} />
      <div css={wlRows}>
        <div css={wlCols}>
          <div css={wlRows}>
            {[...Array(4)].map((_, i) => (
              <div css={wlCols} key={i}>
                <div css={wlItem}>
                  <h6>{i + 1}</h6>
                  <h5>Consume streaming data using Spark Streaming, Flink, and Storm. </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div css={wlCols}>
          <img css={wlImage} src="assets/images/HomePage/WhatLearn/ImageNew.png" />
        </div>
      </div>
    </div>
  </section>
);

export default WhatLearn;
