import { useEffect, useState } from "react";
import Pokemon from "./Components/Pokemon";

const Pokemons = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.results);
          setData(result.results);
        },
      );
  }, []);

  return (
    <ul>
      {data.map((value, index) => (
        <Pokemon key={index} name={value.name} url={value.url}></Pokemon>
      ))}
    </ul>
  );
};

export default Pokemons;
