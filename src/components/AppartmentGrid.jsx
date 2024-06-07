import React, { useState, useEffect } from 'react';
import jsonData from '../assets/appartment.json';

function AppartmentGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <section id='appartment-grid'>
        {data.map((item, index) => (
            <figure key={index} className="appartment-card">
                <a href={`/rental/${item.id}`}>
                        <img src={item.cover} alt={item.title} />
                        <h4>{item.title}</h4>
                    </a>
            </figure>
        ))}
    </section>
  );
}

export default AppartmentGrid;
