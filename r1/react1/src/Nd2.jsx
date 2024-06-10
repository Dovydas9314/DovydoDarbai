import React, { useState } from 'react';
import './Components/ND/medziai.css';

function App() {
  const [medziuSarasas, setMedziuSarasas] = useState({ azuolas: [], berzas: [], uosis: [] });

  const pridetiMedi = (medis) => {
    setMedziuSarasas((prevMedziuSarasas) => {
      const naujasMedziuSarasas = { ...prevMedziuSarasas };
      naujasMedziuSarasas[medis].push(medis);
      return naujasMedziuSarasas;
    });
  };

  return (
    <div className="app">
      <div className="laukas">
        {Object.keys(medziuSarasas).map((medis) => (
          <div key={medis} className="stulpelis">
            {medziuSarasas[medis].map((item, index) => (
              <div key={index} className="medis">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mygtukai">
        <button onClick={() => pridetiMedi('azuolas')}>Azuolas</button>
        <button onClick={() => pridetiMedi('berzas')}>Berzas</button>
        <button onClick={() => pridetiMedi('uosis')}>Uosis</button>
      </div>
    </div>
  );
}

export default App;