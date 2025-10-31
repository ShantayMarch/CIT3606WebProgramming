import logo from './logo.svg';
import './App.css';


function Pokemon() {
  return (
    <div className="Pokemancard">

      <div className="card">
        <img src="727.png" alt="Incineroar" style={{ width: "100%" }} />
        <div className="container">
          <h4><b>Incineroar</b></h4>
          <p>Fire/Dark Type</p>
        </div>
      </div>

     
      <div className="card">
        <img src="993.png" alt="Iron Jugulis" style={{ width: "100%" }} />
        <div className="container">
          <h4><b>Iron Jugulis</b></h4>
          <p>Dark/Flying Type</p>
        </div>
      </div>

      
      <div className="card">
        <img src="790.png" alt="Cosmoem" style={{ width: "100%" }} />
        <div className="container">
          <h4><b>Cosmoem</b></h4>
          <p>Psychic Type</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
