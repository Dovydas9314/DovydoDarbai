import React from 'react';
import AnimalItem from './AnimalItem';

const AnimalList = ({ animals, deleteAnimal, updateAnimal }) => {
  return (
    <ul>
      {animals.map((animal, index) => (
        <AnimalItem 
          key={index} 
          index={index} 
          animal={animal} 
          deleteAnimal={deleteAnimal} 
          updateAnimal={updateAnimal} 
        />
      ))}
    </ul>
  );
};

export default AnimalList;