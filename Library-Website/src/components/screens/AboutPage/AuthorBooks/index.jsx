import React from 'react';
import { authorTitleWrap, authorBookImage, authorBooksWrap, authorBook, authorBooksSection } from './styles.js';
import { Button, Title } from 'components/UI/index.js';
import { useHistory } from 'react-router-dom';

import './styles';

const AuthorBooks = () => {
  const redirect = useHistory();

  return (
    <section css={authorBooksSection}>
      <div className="main-container">
        <div css={authorTitleWrap}>
          <Title text={'Author’s Book Includes'} style={'blue'} position={'center'} color={'yellow'} />
        </div>
        <div css={authorBooksWrap}>
          {[...Array(2)].map((_, i) => (
            <div className="authorBook" key={i}>
              <div css={authorBookImage}>
                <img src="assets/images/HomePage/AuthorBook/Book-new.png" />
              </div>
              <div css={authorBook}>
                <h4>Atomic One’s</h4>
                <p>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</p>
                <ul>
                  {[...Array(2)].map((_, i) => (
                    <li key={i}>
                      <div className="detailYellowPoint" />
                      <div className="detailContainer">
                        <h5>Pages:</h5>
                        <p>586pages</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button
                  outline
                  type="primary"
                  onClick={() => {
                    redirect.push('/store');
                  }}
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorBooks;
