import React, { useState, useEffect } from 'react';

const CatComponent = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const savedCats = JSON.parse(localStorage.getItem('cats')) || [];
    setCats(savedCats);
  }, []);

  useEffect(() => {
    localStorage.setItem('cats', JSON.stringify(cats));
  }, [cats]);

  const addCat = () => {
    if (name.trim() && weight.trim()) {
      const newCat = { name, weight: parseFloat(weight) };
      setCats((prevCats) => {
        const updatedCats = [...prevCats, newCat].sort((a, b) => b.weight - a.weight);
        return updatedCats;
      });
      setName('');
      setWeight('');
    }
  };

  const getTotalWeight = () => {
    return cats.reduce((total, cat) => total + cat.weight, 0);
  };

  return (
    <div>
      <h1>Cat List</h1>
      <input
        type="text"
        placeholder="Cat Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cat Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={addCat}>Add Cat</button>
      <h2>Total Weight: {getTotalWeight()} kg</h2>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            {cat.name} - {cat.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatComponent;