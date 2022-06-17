/*
Užduotis su vienu API
Gauti visus duomenis iš https://pokeapi.co/api/v2/pokemon API ir išrenderinti Pokemons komponente. Nenaudoti bibliotekų. Pvz. https://reactjs.org/docs/faq-ajax.html
Pokemons komponente turėtų būti panaudotas Pokemon komponentas, kuris per props gauna name ir url iš API.
*/

import "./App.css";
import Pokemons from "./Components/Pokemons";

function App() {
   
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>SECOND REACT WORKSHOP</h1>
        <Pokemons></Pokemons>
      </header>
    </div>
    </>
  );
}

export default App;
