import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src="/icon/logo.svg" alt="10-8 Logo" />
        </div>
        <nav className="header__nav">
          <a href="#features">Features</a>
          <a href="#reviews">Reviews</a>
          <a href="#highlights">Highlights</a>
        </nav>
      </div>
      <a href="#download" className="header__cta">
        Download App
      </a>
    </header>
  );
};

export default Header;
