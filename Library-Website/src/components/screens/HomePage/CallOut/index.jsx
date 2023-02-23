import React from 'react';
import { Title, Button } from 'components';
import { callOut, callOutWrap, callOutImage } from './styles';
import { useHistory } from 'react-router-dom';

const CallOut = () => {
  const redirect = useHistory();

  return (
    <section css={callOut}>
      <div className="main-container">
        <div css={callOutWrap}>
          <div className="call-out-content">
            <div className="call-out-title">
              <Title text={'Get Book Copy Today!'} style={'white'} position={'left'} color={'yellow'} />
            </div>
            <p className="call-out-description">
              This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin words.
            </p>
            <Button
              color="white"
              hoverTextColor="primary"
              onClick={() => {
                redirect.push('/store');
              }}
            >
              Order Now
            </Button>
          </div>
          <div css={callOutImage}>
            <img src="assets/images/HomePage/CallOut/Photo.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallOut;
