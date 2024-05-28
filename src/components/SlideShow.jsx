import React, { useState } from 'react';
import leftarrow from '../assets/leftarrow.svg';
import rightarrow from '../assets/rightarrow.svg';

const Slideshow = ({ pictures }) => {
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
    <div id="slideshow">
      {pictures.length > 1 && (
        <>
        <img className="arrow left" src={leftarrow} onClick={previousImage} alt='Previous'></img>
        <img className="arrow right" src={rightarrow} onClick={nextImage} alt='Next'></img>
        <p>{counter + 1} / {pictures.length}</p>
        </>
      )}
      <img src={pictures[counter]} className='slide' alt='Retal picture' />
    </div>
  )
};

export default Slideshow;
