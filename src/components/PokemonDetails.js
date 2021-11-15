import React from "react";

const PokemonDetails = ({ pp }) => {
  return <div>{pp && pp.url}</div>;
};

export default PokemonDetails;
