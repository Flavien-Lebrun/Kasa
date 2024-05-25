import React, { useState } from 'react';
import dropdownopen from '../assets/dropdownopen.svg';

const TextDropDown = ({ dropdownname, text, isAList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      requestAnimationFrame(() => {
          setIsOpen(!isOpen);
      });
  };

  return (
    <div className="dropdown">
      <div className={`dropdown-title ${isOpen ? 'show' : ''}`} onClick={toggleDropdown}>
        <p className='dropdown-name'>{dropdownname}</p>
        <img className={`dropdown-toggle ${isOpen ? 'rotate' : ''}`} src={dropdownopen} alt='Dropdown arrow'></img>
      </div>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
      {isAList ? (
        <ul className={`dropdown-text ${isOpen ? 'show' : ''}`}>
          {text.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
            <p className="dropdown-text">{text}</p>
      )}
      </div>
    </div>
  );
};

export default TextDropDown;
