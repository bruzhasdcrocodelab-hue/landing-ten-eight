import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__top-block">
          <div className="hero__tabs">
            <span className="hero__tab">For You</span>
            <span className="hero__tab">Fight Cards</span>
            <span className="hero__tab">Picks</span>
          </div>
          <div className="hero__title-block">
            <div className="hero__title">
              <p className="hero__title-line1">Every Fight&nbsp;</p>
              <p className="hero__title-line2">Starts Here</p>
            </div>
            <p className="hero__description">
              Track fight bets, follow the latest fight news, join fantasy leagues, and get insider picks from ex-fighters who know who has the edge
            </p>
          </div>
        </div>
        <div className="hero__buttons">
          <a href="#" className="hero__store-btn">
            <span className="hero__store-icon">
              <img src="/icon/apple.svg" alt="App Store" />
            </span>
            <span className="hero__store-text">
              <span className="hero__store-label">Download on the</span>
              <span className="hero__store-name">App Store</span>
            </span>
          </a>
          <a href="#" className="hero__store-btn">
            <span className="hero__store-icon">
              <img src="/icon/google_play.svg" alt="Google Play" />
            </span>
            <span className="hero__store-text">
              <span className="hero__store-label">Get it now</span>
              <span className="hero__store-name">Google Play</span>
            </span>
          </a>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__phone-wrapper">
          <img
            src="/icon/ten-eight.svg"
            alt=""
            className="hero__ten-eight-bg"
          />
          <img
            src="/image/phones.svg"
            alt="App preview"
            className="hero__phone-img"
          />
        </div>
      </div>
      <div className="hero__bottom-line" />
    </section>
  );
};

export default HeroSection;
