import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';
import ReviewsSection from './components/ReviewsSection';
import HighlightsSection from './components/HighlightsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <div className="page__bg">
        <img className="page__bg-blob page__bg-blob--4" src="/backgrounds/ellipse_4.svg" alt="" />
        <img className="page__bg-blob page__bg-blob--5" src="/backgrounds/ellipse_5.svg" alt="" />
        <img className="page__bg-blob page__bg-blob--6" src="/backgrounds/ellipse_6.svg" alt="" />
        <img className="page__bg-blob page__bg-blob--7" src="/backgrounds/ellipse_7.svg" alt="" />
        <img className="page__bg-blob page__bg-blob--4-mobile" src="/backgrounds/ellipse-4-mobile.svg" alt="" />
        <img className="page__bg-blob page__bg-blob--7-mobile" src="/backgrounds/ellipse-7-mobile.svg" alt="" />
      </div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <ReviewsSection />
        <HighlightsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
