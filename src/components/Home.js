import {useState, useEffect} from "react";


export default function Home() {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res)=> res.json())
      .then((res) => {
        setPokemon(res);
        console.log(res);
      })
      .catch((err) => {
        console.log("Error while fetching a pokemon")
      });
  },[number]);

  const randomNumber = () => {
    return setNumber(Math.floor(Math.random() *100) + 1);
  };

  return(
    <div>
      {pokemon.types === undefined ? (
        <h2>Loading ...</h2>
      ) : (
        <>
          <p>name: {pokemon.name} </p>
          <p>height: {pokemon.height}</p>
          <p>weight: {pokemon.weight}</p>
          <p>type: {pokemon.types[0].type.name}</p>
        </>
      )}
      <button type="submit" onClick={randomNumber}>New pokemon</button>
    </div>
  )
}