import React from 'react';
import { Banner } from 'components';
import { ArticlesWrap, ArticleItemsWrap } from './styles';
import { Article } from 'components';

const Blog = () => (
  <section>
    <Banner title={'Articles'} color={'yellow'} style={'white'} position={'center'} />
    <div className="main-container">
      <div css={ArticlesWrap}>
        {[...Array(6)].map((_, index) => (
          <div key={index} css={ArticleItemsWrap}>
            <Article />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
