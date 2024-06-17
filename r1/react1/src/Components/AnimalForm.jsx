import React, { useState } from 'react';

const AnimalForm = ({ addAnimal }) => {
  const [type, setType] = useState('sheep');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight.trim() !== '') {
      addAnimal({ type, weight: parseFloat(weight) });
      setType('sheep');
      setWeight('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="sheep">Avis</option>
        <option value="duck">Antis</option>
        <option value="antelope">Antilopė</option>
      </select>
      <input 
        type="number" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
        placeholder="Svoris" 
      />
      <button type="submit">Pridėti gyvulį</button>
    </form>
  );
};

export default AnimalForm;