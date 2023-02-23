import React from 'react';
import { Banner } from 'components';

import { Cont, KeepInTouch, Form, InputWrap, BigField, Contact, MessageField, ContactIcon, CheckBox } from './styles';
import { Button, Title } from 'components';

const Contacts = () => (
  <section>
    <Banner title={'Contacts'} style={'white'} color={'yellow'} position={'center'} />
    <div className="main-container">
      <div css={Cont}>
        <div css={KeepInTouch}>
          <Title text={'Keep in Touch'} style={'blue'} color={'yellow'} position={'left'} />
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomized words which do not look even slightly believable.
          </p>
          <ul>
            <li>
              <div css={ContactIcon}>
                <img src="assets/images/contacts/Icon.svg" />
              </div>
              <div css={Contact}>
                <h4>Visit Us :</h4>
                <p>No: 09a, Downtown, San Dieago, USA.</p>
              </div>
            </li>
            <li>
              <div css={ContactIcon}>
                <img src="assets/images/contacts/mail.svg" />
              </div>
              <div css={Contact}>
                <h4>Drop us :</h4>
                <p>support@pages.com</p>
              </div>
            </li>
            <li>
              <div css={ContactIcon}>
                <img src="assets/images/contacts/phone-call.svg" />
              </div>
              <div css={Contact}>
                <h4>Call Us :</h4>
                <p>Call: 1-800-123-9999</p>
              </div>
            </li>
          </ul>
        </div>
        <form css={Form}>
          <div css={InputWrap}>
            <img src="assets/images/contacts/Form Icons/user.png" />
            <input type="text" placeholder="Name" aria-label="Name" />
          </div>

          <div css={InputWrap}>
            <img src="assets/images/contacts/Form Icons/mail.png" />
            <input type="text" placeholder="Email" aria-label="Email" />
          </div>
          <div css={BigField}>
            <img src="assets/images/contacts/Form Icons/phone.png" />
            <input height="60px" type="text" placeholder="Phone" aria-label="Phone" />
          </div>
          <div css={MessageField}>
            <img src="assets/images/contacts/Form Icons/edit.png" />
            <textarea rows="8" type="text" placeholder="Message" aria-label="Message" />
          </div>
          <div css={CheckBox}>
            <input type="checkbox" id="news" name="news" />
            <label htmlFor="news">Keep me up to date with news and offers from time to time by email</label>
          </div>
          <Button type="secondary" fullWidth={true}>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default Contacts;
