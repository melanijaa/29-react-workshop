/*
Užduotis su vienu API
Gauti visus duomenis iš https://pokeapi.co/api/v2/pokemon API ir išrenderinti Pokemons komponente. Nenaudoti bibliotekų. Pvz. https://reactjs.org/docs/faq-ajax.html
Pokemons komponente turėtų būti panaudotas Pokemon komponentas, kuris per props gauna name ir url iš API.
*/

import { useState } from "react";
import "./App.css";

function App() {

    const [pokemon, setPokemon] = useState([]);

    const getData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setPokemon(data.results);
          });
      };
      getData();
   
  return (
    <div className="App">
      <header className="App-header">
        <h1>SECOND REACT WORKSHOP</h1>
        <ul>
          {pokemon.map((name, i) => {
           <div key={pokemon.name} name={pokemon.name} photo={pokemon.url}></div>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
