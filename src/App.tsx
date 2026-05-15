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
      <div className="page__bg" />
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
