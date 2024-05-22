import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from '../assets/appartment.json';
import leftarrow from '../assets/leftarrow.svg';
import rightarrow from '../assets/rightarrow.svg';
import Carousel from './Carousel';

const Rental = () => {
  const {rentalId} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [element, setElement] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);
  
  useEffect(() => {
    // Exécuter la logique de recherche seulement après que les données ont été chargées
    if (data.length > 0) {
        const foundElement = data.find(item => item.id === rentalId);
        if (foundElement) {
            setElement(foundElement);
        } else {
            navigate('/not-found'); // Redirection si aucun élément trouvé
        }
    }
  }, [data, rentalId, navigate]);

  if (!element) {
    return null;
  }

  const { title, cover, location, pictures } = element;

  return (
    <div className='rental'>
      {/* <div className="carousel"> */}
        {/* <img class="arrow left" src={leftarrow}></img>
        <img class="arrow right" src={rightarrow}></img>
        <img src={cover} alt={title} className='slide' /> */}
        <Carousel pictures={pictures} />
        {/* <p></p>
      </div> */}
      <div className="description">
        <h1 className='title'>{title}</h1>
        <p>{location}</p>
        {element.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Rental;
