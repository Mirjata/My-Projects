import React from 'react';
import { Button, Title } from 'components';
import {
  theChapter,
  chapterDetails,
  chapterDetailItem,
  chapterDetailsWrap,
  chapterAnchor,
  chapterRow,
  chapterCol,
  chapterItem,
  chapterButton,
} from './styles';
import { useHistory, NavLink } from 'react-router-dom';

const TheChapter = () => {
  const redirect = useHistory();

  return (
    <section css={theChapter}>
      <div className="main-container">
        <Title text={'The Chapter Includes'} position={'center'} style={'blue'} color={'yellow'} />
        <div css={chapterRow}>
          {[...Array(4)].map((_, i) => (
            <div key={i} css={chapterCol}>
              <div css={chapterItem}>
                <h5>Chapter-01 Get Started Intro</h5>
                <p>
                  Making this the first true value generator on the Internet. It of over 200 Latin words, combined with
                  a handful.
                </p>
                <ul css={chapterDetails}>
                  {[...Array(2)].map((_, i) => (
                    <div key={i}>
                      <li css={chapterDetailItem}>
                        <div className="chapter-detail-point" />
                        <div css={chapterDetailsWrap}>
                          <h5>Pages:</h5>
                          <p>586pages</p>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div css={chapterButton}>
          <div>
            <Button
              type="secondary"
              onClick={() => {
                redirect.push('/contacts');
              }}
            >
              Start a 15-Days Free Trail
            </Button>
          </div>
          <p>
            Short description about each chapter
            <br />
            <NavLink css={chapterAnchor} exact to={'/contacts'}>
              Have any questions?
            </NavLink>
            Contact us
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheChapter;
