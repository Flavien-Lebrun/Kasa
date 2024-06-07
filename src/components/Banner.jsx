import React from 'react';
import { useLocation } from 'react-router-dom';
import homeBanner from '../assets/cove.png'
import aboutBanner from '../assets/mountains.png'

const Banner = ({ opacityValue, text }) => {
  const location = useLocation();
  let backgroundImage;
  if (location.pathname === '/') {
    backgroundImage = homeBanner;
  } else if (location.pathname === '/about') {
    backgroundImage = aboutBanner;
  } else {
    return null;
  }

  return (
    <section id="banner">
        <div
            className="banner-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}/>
        <span className="banner-mask" style={{ opacity: opacityValue}} />
        {text && (
          <React.Fragment>
            <p className='banner-content border' dangerouslySetInnerHTML={{ __html: text }}/>
            <p className='banner-content' dangerouslySetInnerHTML={{ __html: text }}/>
          </React.Fragment>
        )}
    </section>
  );
};


export default Banner;