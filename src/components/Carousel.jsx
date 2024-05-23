import React, { useState } from 'react';
import leftarrow from '../assets/leftarrow.svg';
import rightarrow from '../assets/rightarrow.svg';

const Carousel = ({ pictures }) => {
  const [ counter, setCounter ] = useState(0);

  const previousImage = () => {
    if (counter === 0) {
      setCounter(pictures.length - 1);
    } 
    else { 
      setCounter(counter - 1);
    }
  }

  const nextImage = () => {
    if (counter === pictures.length - 1) {
      setCounter(0);
    }
    else { 
      setCounter(counter + 1);
    }
  }

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
        <img class="arrow left" src={leftarrow} onClick={previousImage}></img>
        <img class="arrow right" src={rightarrow} onClick={nextImage}></img>
        </>
      )}
      <img src={pictures[counter]} className='slide' />
      <p>{counter + 1} / {pictures.length}</p>
    </div>
  )
};

export default Carousel;
