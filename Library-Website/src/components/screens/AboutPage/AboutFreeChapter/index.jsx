import React from 'react';
import { FreeChapterCard } from 'components';
import { freeChapterCard } from './styles';

const AboutFreeChapter = () => (
  <section>
    <div className="main-container">
      <div css={freeChapterCard}>
        <FreeChapterCard />
      </div>
    </div>
  </section>
);

export default AboutFreeChapter;
