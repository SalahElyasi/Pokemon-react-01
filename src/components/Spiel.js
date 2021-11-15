import React, { useState } from "react";
import Button from "@mui/material/Button";

function Spiel({ allPokemons }) {
  //console.log(allPokemons);
  const [selected, setSelected] = useState([]);
  const [winner, setWinner] = useState();

  //const pokemonData = ["pokemon1", "pokemon2", "pokemon3", "pokemon4"];
  const pokemonData = allPokemons;

  const handleClick = (e) => {
    if (selected.length === 0) {
      setSelected([e.sprites.other.dream_world.front_default]);
    } else if (selected.length === 1) {
      setSelected([...selected, e.sprites.other.dream_world.front_default]);
    } else {
      setSelected([]);
    }
  };

  const handleStart = () => {
    const random = Math.floor(Math.random() * 2);
    setWinner(selected[random]);
  };

  return (
    <div className="pokemon-container">
      <div className="all-container">
        {pokemonData.map((pokemon) => (
          <div className="pokemon thumb-container">
            <button onClick={(e) => handleClick(pokemon)}>
              {pokemon.name}
            </button>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>

      <div className="pokemon-container">
        <h4 className="pokemon thumb-container">
          Spieler 1: <img src={selected[0]} />
        </h4>
        <h4 className="pokemon thumb-container">
          Spieler 2: <img src={selected[1]} />
        </h4>
        {selected.length === 2 && (
          <div>
            <p>Starte das Spiel!</p>
            <Button
              variant="outlined"
              size="large"
              className="load-more"
              onClick={handleStart}
            >
              START
            </Button>
          </div>
        )}
      </div>

      {winner && (
        <div className="thumb-container1">
          <h1>Gewinner</h1>
          <img className="pokemon thumb-container1" src={winner} />
        </div>
      )}
    </div>
  );
}

export default Spiel;
