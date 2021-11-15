import React from "react";
import { useParams } from "react-router-dom";

const PokemonId = ({ data }) => {
  const { id } = useParams();
  return (
    <div>
      Pokemon Id
      {data &&
        data
          .filter((d) => d.id === parseInt(id))
          .map((m) => (
            <li key={m.id}>
              {m.id}--{m.name.english}
            </li>
          ))}
    </div>
  );
};

export default PokemonId;
