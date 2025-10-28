import logo from './logo.svg';
import './App.css';

function Pokemon(props) {
  return ( 
  <div className="card">
  <img src={props.image} alt={props.name} style={{width: "100%"}}/>
  <div className="container">
    <h4><b>{props.name}</b></h4>
    <p>{props.type} Type</p>
  </div>
</div>
  );
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Pokedex</h1>

<div className="Pokemancard">

  <Pokemon  name="Incineroar"  image ="727.png" type="Fire/Dark" />
  <Pokemon name=" Iron Jugulis" image ="993.png" type="Dark/Flying" />
  <Pokemon name= "Cosmoem" image ="790.png" type="Psychic" />

</div>

       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
