import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import {
  footer,
  footerWrap,
  footerIcons,
  footerLogos,
  footerExplore,
  footerContacts,
  footerUtility,
  footerRightCol,
  footerTextCursor,
  footerLinksWrap,
  footerContactsTitles,
  footerContactWrap,
  footerCopyright,
  footerUnderline,
} from './styles';

const Footer = () => (
  <section css={footer}>
    <div className="main-container">
      <div css={footerWrap}>
        <div css={footerIcons}>
          <img src="/assets/images/NavBar/Logo.png" />
          <div css={footerLogos}>
            <div className="logo">
              <FaFacebookF />
            </div>
            <div className="logo">
              <FaTwitter />
            </div>
            <div className="logo">
              <FaLinkedinIn />
            </div>
            <div className="logo">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div css={footerRightCol}>
          <div css={footerExplore}>
            <h5>Explore</h5>
            {[...Array(6)].map((_, i) => (
              <div key={i} css={footerLinksWrap}>
                <img src="assets/images/HomePage/footer/icon.png" />
                <p css={footerTextCursor}>Home</p>
              </div>
            ))}
          </div>
          <div css={footerUtility}>
            <h5>Utility Pages</h5>
            {[...Array(6)].map((_, i) => (
              <div key={i} css={footerLinksWrap}>
                <img src="assets/images/HomePage/footer/icon.png" />
                <p css={footerTextCursor}>Home</p>
              </div>
            ))}
          </div>
          <div css={footerContacts}>
            <h5 css={footerContactsTitles}>Keep in Touch</h5>
            <div css={footerContactWrap}>
              <h5 css={footerContactsTitles}>Address:</h5>
              <p css={footerTextCursor}>24A Kingston St, Los Vegas NC 28202, USA.</p>
            </div>
            <div css={footerContactWrap}>
              <h5 css={footerContactsTitles}>Mail:</h5>
              <p css={footerTextCursor}>support@doctors.com</p>
            </div>
            <div css={footerContactWrap}>
              <h5 css={footerContactsTitles}>Phone:</h5>
              <p css={footerTextCursor}>(+22) 123 - 4567 - 900</p>
            </div>
          </div>
        </div>
      </div>
      <div css={footerUnderline} />
      <div css={footerCopyright}>
        <span> © Drafted by</span> Victorflow - <span className="colored">Powered by Webflow </span>
      </div>
    </div>
  </section>
);

export default Footer;
