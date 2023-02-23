import React from 'react';
import { Banner, Button } from 'components';
import { pageWrap, contentWrap } from './styles';

const PageError = () => (
  <div>
    <Banner title={'Page Error'} style={'white'} position={'center'} color={'yellow'} />
    <div css={pageWrap}>
      <div css={contentWrap}>
        <h1>404</h1>
        <h4>Page not Found!!!</h4>
        <p>
          The page you are looking for does not exist. Please try searching for some other page, or return to the
          website homepage to find what you are looking for.
        </p>
        <Button type="secondary">Back to Home</Button>
      </div>
    </div>
  </div>
);

export default PageError;
