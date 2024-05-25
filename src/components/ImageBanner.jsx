import React from 'react';
import { useLocation } from 'react-router-dom';
import homeBanner from '../assets/cove.png'
import aboutBanner from '../assets/mountains.png'

const ImageBanner = ({ opacityValue, text }) => {
  const location = useLocation();
  // Déterminez quelle image utiliser en fonction de l'URL
  let backgroundImage;
  if (location.pathname === '/') {
    backgroundImage = homeBanner;
  } else if (location.pathname === '/about') {
    backgroundImage = aboutBanner;
  } else {
    return null;
  }

  return (
    <div id="banner">
        <div
            className="banner-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}/>
        <span className="banner-mask" style={{ opacity: opacityValue}} />
        {text && (
          <React.Fragment>
            <p className='banner-content border'>{text}</p>
            <p className='banner-content'>{text}</p>
          </React.Fragment>
        )}
    </div>
  );
};


export default ImageBanner;