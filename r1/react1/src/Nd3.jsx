import { useEffect, useRef, useState } from 'react';
import './App.css';
import './buttons.scss';
import Sq from './Components/007/Sq';
import rand from './Functions/rand';

function App() {
    const [sq, setSq] = useState(null);
    const historyRef = useRef([]);

    useEffect(() => {
        setTimeout(() => {
            setSq(JSON.parse(localStorage.getItem('sq') ?? '[]'));
        }, 2000);
    }, [setSq]);

    useEffect(() => {
        if (sq === null) {
            return;
        }
        localStorage.setItem('sq', JSON.stringify(sq));
    }, [sq]);

    const prideti = () => {
        const numberOfSquares = rand(5, 10);
        const newSquares = Array.from({ length: numberOfSquares }, () => ({ id: rand(1000000, 9999999) }));
        historyRef.current.push(sq);
        setSq(prev => [...newSquares, ...prev]);
    };

    const istrinti = () => {
        historyRef.current.push(sq);
        setSq([]);
    };

    const grizti = () => {
        if (historyRef.current.length === 0) return;
        const lastState = historyRef.current.pop();
        setSq(lastState);
    };

    const destroySq = id => {
        historyRef.current.push(sq);
        setSq(s => s.filter(sq => sq.id !== id));
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="sq-bin">
                    {sq !== null
                        ? sq.length
                            ? sq.map(s => <Sq key={s.id} sq={s} destroySq={destroySq} />)
                            : <div>No squares</div>
                        : <div>Loading...</div>}
                </div>
                <div className="buttons">
                    <button type="button" className="blue" onClick={prideti}>Pridėti</button>
                    <button type="button" className="red" onClick={istrinti}>Išvalyti</button>
                    <button type="button" className="yellow" onClick={grizti}>Atgal</button>
                </div>
            </header>
        </div>
    );
}

export default App;