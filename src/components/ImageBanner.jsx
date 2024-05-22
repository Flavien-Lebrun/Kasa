import React from 'react';
import { useLocation } from 'react-router-dom';
import homeBanner from '../assets/cove.png'
import aboutBanner from '../assets/mountains.png'

const ImageBanner = (props) => {
  const {imgsrc} = props;


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
    <div className="banner">
        <div
            className="banner-image"
            style={{ backgroundImage: `url(${imgsrc})` }}>
        </div>
        <div className="banner-content">
            <p className='banner-content-with-border'>Chez vous, partout et ailleurs</p>
            <p className='banner-content-without-border'>Chez vous, partout et ailleurs</p>
        </div>
    </div>
  );
};


export default ImageBanner;