import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import PokemonDetails from "./PokemonDetails";

const PokemonList = ({ pokemon }) => {
  const [details, setDetails] = useState([]);
  // const { name } = pokemon;
  // const { slug } = useParams();
  // const pp = pokemon.find((e) => e.name === slug);
  // console.log("------------>" + pp);

  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.name}>
          <Link to={`/pokemon_details/${p.name}`}>{p.name}</Link>
          {console.log(p)}
          {/* <img href={p.sprites.other.deam_world.front_default} /> */}
          {/* {pp && <PokemonDetails pp={pp} />} */}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
