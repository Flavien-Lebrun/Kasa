import React from 'react';

const Star = ({ filled }) => {
  return (
    <i className={`fa-star ${filled ? 'fa-solid' : 'fa-solid'}`} style={{ color: filled ? '#FF6060' : '#E3E3E3' }}></i>
  );
};

export default Star;
