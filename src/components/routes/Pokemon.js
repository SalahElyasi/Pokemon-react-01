import React from "react";

const Pokemon = ({ data }) => {
  return (
    <div>
      Pokemon
      {data &&
        data.map((d) => (
          <li key={d.id}>
            {d.id}--{d.name.english}
          </li>
        ))}
    </div>
  );
};

export default Pokemon;
