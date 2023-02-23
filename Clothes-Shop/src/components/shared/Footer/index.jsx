import React, { useEffect } from 'react';
import './styles.css';

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="logo-container">
            <img className="logo" src="assets/images/Footer-icons/logo.png" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
            <div className="icons">
              <img src="assets/images/Footer-icons/facebook.png" />
              <img src="assets/images/Footer-icons/twitter.png" />
              <img src="assets/images/Footer-icons/linkedin.png" />
              <img src="assets/images/Footer-icons/dribbble.png" />
            </div>
          </div>
          <div className="catalog">
            <h2>CATALOG</h2>
            <p>Necklaces</p>
            <p>Hoodies</p>
            <p>Jewelry Box</p>
            <p>T-Shirt</p>
            <p>Jacket</p>
          </div>
          <div className="about-us">
            <h2>ABOUT US</h2>
            <p>Our Producers</p>
            <p>Sitemap</p>
            <p>FAQ</p>
            <p>About us</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="customer-services">
            <h2>CUSTOMER SERVICES</h2>
            <p>Contact Us</p>
            <p>Track Your Order</p>
            <p>Product Care & Repair</p>
            <p>Book An Appointment</p>
            <p>Shipping & Returns</p>
          </div>
        </div>
      </div>
      <div className="payment-methods">
        <div className="container">
          <div className="payments">
            <h4>© 2022 Coral, Inc.</h4>
            <img src="assets/images/Footer-icons/icons_payment 1.png" />
            <button
              className="btn-scroll-to-top"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              Scroll to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
