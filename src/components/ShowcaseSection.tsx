import React from 'react';
import '../styles/ShowcaseSection.css';

const ShowcaseSection: React.FC = () => {
  return (
    <section className="showcase">
      <div className="showcase__image-container">
        <div className="showcase__image">
          <div className="showcase__pagination">
            <div className="showcase__dot showcase__dot--active" />
            <div className="showcase__dot showcase__dot--inactive" />
            <div className="showcase__dot showcase__dot--inactive" />
            <div className="showcase__dot showcase__dot--inactive" />
          </div>
          <img
            src="/backgrounds/group-ten-eight.svg"
            alt=""
            className="showcase__wireframe"
          />
          <img
            src="/image/man.png"
            alt="Fighter"
            className="showcase__man"
          />
        </div>
      </div>
      <div className="showcase__bottom-line" />
    </section>
  );
};

export default ShowcaseSection;
