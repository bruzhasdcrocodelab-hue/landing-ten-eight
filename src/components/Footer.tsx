import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__copy">
        <p>© 2026 10-8. All rights reserved.</p>
      </div>
      <div className="footer__logo">
        <img src="/icon/logo.svg" alt="10-8 Logo" />
      </div>
      <div className="footer__links">
        <div className="footer__link">
          <p>Privacy Policy</p>
        </div>
        <div className="footer__link">
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
