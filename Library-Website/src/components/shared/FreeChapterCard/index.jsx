import React from 'react';
import { Button, Title } from 'components';
import { freeChapterCardWrap } from './styles';

export const FreeChapterCard = () => (
  <section css={freeChapterCardWrap}>
    <Title text={'Read a free chapter'} style={'blue'} position={'center'} color={'blue'} />
    <p>
      Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.
    </p>
    <form>
      <input placeholder="Your Email id..." />
      <Button color="white" width={true} hoverBorderColor="primary">
        Subscribe
      </Button>
    </form>
  </section>
);

export default FreeChapterCard;
