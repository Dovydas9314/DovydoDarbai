import React from 'react';
import './dogs.css';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

const DogsList = () => {
  return (
    <div>
      {dogs.map((dog, index) => (
        <div
          key={index}
          style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px',
            border: '1px solid black',
            borderRadius: index % 2 === 0 ? '0' : '50%'
          }}
        >
          {dog}
        </div>
      ))}
    </div>
  );
};

export default DogsList;