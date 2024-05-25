import React from 'react';
import Star from './Star';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= rating} />);
  }

  return <div className='rating'>{stars}</div>;
};

export default StarRating;