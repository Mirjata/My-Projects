import React from 'react';
import { Title, Article } from 'components';
import { articles, articlesWrap, articleItemsWrap } from './styles';

const Articles = () => (
  <section css={articles}>
    <div className="main-container">
      <Title text={'Articles & Resources'} style={'blue'} position={'center'} color={'yellow'} />
      <div css={articlesWrap}>
        {[...Array(3)].map((_, i) => (
          <div key={i} css={articleItemsWrap}>
            <div>
              <Article />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Articles;
