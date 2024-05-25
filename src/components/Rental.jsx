import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from '../assets/appartment.json';
import Slideshow from './SlideShow';
import StarRating from './StarRating';
import TextDropDown from './TextDropDown';

const Rental = () => {
  const {rentalId} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [element, setElement] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);
  
  useEffect(() => {
    if (data.length > 0) {
        const foundElement = data.find(item => item.id === rentalId);
        if (foundElement) {
            setElement(foundElement);
        } else {
            navigate('/not-found');
        }
    }
  }, [data, rentalId, navigate]);

  if (!element) {
    return null;
  }

  const { title, location, pictures, host, rating, description, equipments } = element;
  const formattedName = host.name.replace(" ", "\n");

  return (
    <div id='rental'>
        <Slideshow pictures={pictures} />
      <div className="presentation">
        <div className='presentation-details'>
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="tags">
            {element.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag">{tag}</span>
          ))}
          </div>
        </div>
        <div className="presentation-hoster">
          <div className="hoster-details">
            <p>{formattedName}</p>
            <img src={host.picture} className='hoster-picture' alt={`Picture of ${host.name}`} />
          </div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="drop-down-menus">
        <TextDropDown dropdownname = "Description" text={description} isAList={false} />
        <TextDropDown dropdownname = "Équipements" text={equipments} isAList={true} />
      </div>
    </div>
  );
};

export default Rental;
