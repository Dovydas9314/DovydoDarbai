import React, { useState } from 'react';

const AnimalItem = ({ animal, index, deleteAnimal, updateAnimal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [weight, setWeight] = useState(animal.weight);

  const handleUpdate = () => {
    updateAnimal(index, { ...animal, weight: parseFloat(weight) });
    setIsEditing(false);
  };

  return (
    <li>
      {animal.type}: 
      {isEditing ? (
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
      ) : (
        ` ${animal.weight} kg`
      )}
      <button onClick={() => deleteAnimal(index)}>Ištrinti</button>
      {isEditing ? (
        <button onClick={handleUpdate}>Atnaujinti</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Redaguoti</button>
      )}
    </li>
  );
};

export default AnimalItem;