import React from 'react';
import { Button, Title } from 'components';
import { wrapper, authorTitleWrap, authorBookImage, authorBooksWrap, authorBook } from './styles.js';
import { useHistory } from 'react-router-dom';

const AuthorBook = () => {
  const redirect = useHistory();
  return (
    <section css={wrapper}>
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
                  color="primary"
                  hoverTextColor="primary"
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

export default AuthorBook;
