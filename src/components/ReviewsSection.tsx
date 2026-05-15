import React from 'react';
import '../styles/ReviewsSection.css';

interface Review {
  name: string;
  quote: string;
}

const reviews: Review[] = [
  {
    name: 'Maya R.',
    quote: 'Checking odds and news in one place makes fight night way easier',
  },
  {
    name: 'Jordan K.',
    quote: 'The ex-fighter picks are the best part. It feels like getting inside info',
  },
  {
    name: 'Alyssa S.',
    quote: 'Fantasy leagues and fight news keep me locked in all week',
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__header">
        <p className="reviews__title">Loved by Every User</p>
        <p className="reviews__subtitle">Fast, focused, and built for serious fight watchers</p>
      </div>
      <div className="reviews__list">
        <div className="reviews__row">
          {reviews.map((review) => (
            <div key={review.name} className="reviews__card">
              <div className="reviews__card-user">
                <div className="reviews__card-avatar-group">
                  <div className="reviews__card-avatar" />
                  <div className="reviews__card-name-group">
                    <p className="reviews__card-name">{review.name}</p>
                  </div>
                </div>
                <img
                  src="/icon/stars.svg"
                  alt="5 stars"
                  className="reviews__stars"
                />
              </div>
              <div className="reviews__card-quote-wrap">
                <p className="reviews__card-quote">{review.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="reviews__bottom-line" />
    </section>
  );
};

export default ReviewsSection;
