import React, { useState, useEffect } from 'react';
import AnimalForm from './AnimalForm';
import AnimalList from './AnimalList';

const App = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem('animals')) || [];
    setAnimals(storedAnimals);
  }, []);

  const addAnimal = (animal) => {
    const newAnimals = [...animals, animal];
    setAnimals(newAnimals);
    localStorage.setItem('animals', JSON.stringify(newAnimals));
  };

  const deleteAnimal = (index) => {
    const newAnimals = animals.filter((_, i) => i !== index);
    setAnimals(newAnimals);
    localStorage.setItem('animals', JSON.stringify(newAnimals));
  };

  const updateAnimal = (index, updatedAnimal) => {
    const newAnimals = animals.map((animal, i) => (i === index ? updatedAnimal : animal));
    setAnimals(newAnimals);
    localStorage.setItem('animals', JSON.stringify(newAnimals));
  };

  return (
    <div>
      <h1>Ganykla</h1>
      <AnimalForm addAnimal={addAnimal} />
      <AnimalList animals={animals} deleteAnimal={deleteAnimal} updateAnimal={updateAnimal} />
    </div>
  );
};

export default App;