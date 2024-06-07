import React, { useState, useEffect } from 'react';
import jsonData from '../assets/infos.json';
import TextDropDown from './TextDropDown';

const Infos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
      }, []);

    return (
        <section id='infos-section'>
            {data.map((item, index) => (
                <TextDropDown
                key={index}
                dropdownname={item.name}
                text={item.content}
                isAList={item.isAList}
                />
            ))}
        </section>
    );
};

export default Infos;