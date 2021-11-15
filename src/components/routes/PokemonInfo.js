import React from "react";
import { useParams } from "react-router-dom";

const PokemonInfo = ({ data }) => {
  const { id, info } = useParams();

  return (
    <div>
      Pokemon Id
      {data &&
        data
          .filter((d) => d.id === parseInt(id))
          .map((m) => (
            <li key={m.id}>
              {m.id}--
              {info === "name"
                ? m.name.english
                : "keine" && info === "type"
                ? m.type.map((p) => <div key={p}>{p}</div>)
                : "keine" && info === "base"
                ? m.base.HP
                : "keine"}
            </li>
          ))}
    </div>
  );
};

export default PokemonInfo;
