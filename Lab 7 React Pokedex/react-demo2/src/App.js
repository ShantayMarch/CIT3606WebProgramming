import './App.css';
import {useState} from "react"


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

function Search(){
const [name, setName ] = useState ('');
const [image, setImage ] = useState ('');
const [type, setType ] = useState ('');

const getPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    setImage(data.sprites.front_default);
    setType(data.types[0].type.name);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    setImage("");
    setType("Not found");
  }
};

return <div>
Enter name:
<input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Pokemon" />
<button onClick={getPokemon}>Search</button>
<Pokemon name={name} image={image} type={type} />

</div>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Pokedex</h1>
       <Search/>
<div className="Pokemancard">

  <Pokemon  name="Incineroar"  image ="727.png" type="Fire/Dark" />
  <Pokemon name=" Iron Jugulis" image ="993.png" type="Dark/Flying" />
  <Pokemon name= "Cosmoem" image ="790.png" type="Psychic" />

</div>

      </header>
    </div>
  );
}

export default App;