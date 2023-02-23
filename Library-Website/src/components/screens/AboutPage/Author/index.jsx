import React from 'react';
import { Banner, Button, Title } from 'components';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {
  authorImageWrap,
  aboutAuthor,
  aboutAuthorLeft,
  aboutAuthorRight,
  aboutAuthorTitles,
  aboutAuthorDetails,
  aboutAuthorSocialIcons,
  aboutAuthorIcon,
  aboutAuthorSection,
} from './styles';

const Author = () => {
  const redirect = useHistory();

  return (
    <section>
      <Banner title={'About The Author'} position={'center'} color={'yellow'} style={'white'} />
      <div css={aboutAuthorSection}>
        <div className="main-container">
          <div css={authorImageWrap}>
            <img src="assets/images/AboutPage/Image.png" />
          </div>
          <div css={aboutAuthor}>
            <div css={aboutAuthorLeft}>
              <div css={aboutAuthorTitles}>
                <h5>Country :</h5>
                <h5>Language :</h5>
                <h5>Genre :</h5>
                <h5>Publication date :</h5>
                <h5>Share us on :</h5>
              </div>
              <div css={aboutAuthorDetails}>
                <p>United Kingdom</p>
                <p>English</p>
                <p>Historiography</p>
                <p>1991</p>
                <div css={aboutAuthorSocialIcons}>
                  <div css={aboutAuthorIcon}>
                    <FaFacebookF />
                  </div>
                  <div css={aboutAuthorIcon}>
                    <FaTwitter />
                  </div>
                  <div css={aboutAuthorIcon}>
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div css={aboutAuthorRight}>
              <Title text={'About Dr. John Abraham '} position={'left'} style={'blue'} color={'yellow'} />
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can
                combined with a handful of model sentence structures.
              </p>
              <Button
                type="secondary"
                onClick={() => {
                  redirect.push('/contacts');
                }}
              >
                Contact now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
