import './App.css';
import Bebras from './Components/001/Bebras'

function App() {

  const el1 = <h3>valio {2 * 4} kartus</h3>
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          color: 'skyblue',
           letterSpacing: '15px'
           }
           }>Hello Reackt !!!</h1>
        {/* <Bebras></Bebras> */}
        {2 * 5}
        {el1}
        {el1}
        {el1}
        <Bebras/>
      </header>
    </div>
  );
}

export default App;
