import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { article, articleImage, articleTextWrap, articleDate } from './styles';

const Article = () => {
  const redirect = useHistory();

  return (
    <section css={article}>
      <div css={articleImage}>
        <img src="assets/images/HomePage/Article/Image.png" />
      </div>
      <div css={articleTextWrap}>
        <h5>The energy efficiency offers hydrotherapy or swim</h5>
        <p>The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.</p>
        <div css={articleDate}>
          <NavLink exact to={'/article'}>
            Read more
          </NavLink>
          <p className="author-date">Author - 23.05.2022</p>
        </div>
      </div>
    </section>
  );
};

export default Article;
