import React from 'react';
import { Banner } from 'components';
import { Button, FreeChapterCard } from 'components';
import { ProductsWrap, authorBook, freeChapterCard } from './store';
import { useHistory } from 'react-router-dom';

const Store = () => {
  const redirect = useHistory();

  return (
    <section>
      <Banner title={'My Store'} style={'white'} color={'yellow'} position={'center'} />
      <div className="main-container">
        <div css={ProductsWrap}>
          {[...Array(6)].map((_, i) => (
            <div className="authorBook" key={i}>
              <img src="assets/images/HomePage/AuthorBook/Book-new.png" />
              <div css={authorBook}>
                <h4>Atomic One’s</h4>
                <p>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</p>
                <ul>
                  <li>
                    <div className="detailYellowPoint" />
                    <div className="detailContainer">
                      <h5>Printed Books</h5>
                    </div>
                  </li>
                </ul>
                <Button
                  outline
                  type="primary"
                  onClick={() => {
                    redirect.push('/singleProduct');
                  }}
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div css={freeChapterCard}>
          <FreeChapterCard />
        </div>
      </div>
    </section>
  );
};

export default Store;
