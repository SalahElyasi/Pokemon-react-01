import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../v3.css";

const PokemonThumb = ({ id, image, name, type, data, _callback }) => {
  const style = type + " thumb-container";
  const [state, setState] = useState({ spieler_eins: "", spieler_zwei: "" });

  const [spiel1, setSpiel1] = useState(null);
  const [spiel2, setSpiel2] = useState(null);
  const [gewinner, setGewinner] = useState(null);

  let g = 0;

  const handleClick1 = (e) => {
    console.log(e.base_experience);
    if (!spiel1) {
      setSpiel1(e.base_experience);
      setSpiel2(null);
      console.log(" spieler_eins= " + spiel1 + " spieler_zwei= " + spiel2);
    } else {
      handleClick2(e);
    }
  };
  const handleClick2 = (e) => {
    setSpiel2(e.base_experience);
    if (spiel1 > spiel2) {
      setGewinner(spiel1);
    } else {
      setGewinner(spiel2);
    }
    // setSpiel1(null);
    // setSpiel2(null);
    setGewinner(g);
    console.log("gewinner" + gewinner);
    console.log(" spieler_eins " + setSpiel1 + " spieler_zwei " + setSpiel2);
  };

  const handleClick3 = (e) => {
    setState({ spieler_eins: e.base_experience });
    console.log(state);
  };

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <button onClick={(e) => handleClick3(data)}>Take</button>
      </div>
    </div>
  );
};

export default PokemonThumb;

//------------------------------------(e) => handleClick1(data)
// onClick={
//             !spiel1
//             ? setSpiel1(data.base_experience)
//             : setSpiel2(data.base_experience)
//         }

//

//let count = 1;
// const handleClick1 = (e) => {
//   console.log(e.base_experience);
//   if (state.spieler_eins === "") {
//     setState({ spieler_eins: e.base_experience, ...state });
//     setState({ ...state, spieler_zwei: "" });
//     console.log(
//       " spieler_eins= " +
//         state.spieler_eins +
//         " spieler_zwei= " +
//         state.spieler_zwei
//     );
//     console.log(state);
//   } else {
//     handleClick2(e);
//   }
// };
// const handleClick2 = (e) => {
//   if (state.spieler_eins != "") {
//     setState({ ...state, spieler_zwei: e.base_experience });
//     if (state.spieler_eins > state.spieler_zwei) {
//       g = state.spieler_eins;
//     } else {
//       g = state.spieler_zwei;
//     }
//     setState({ spieler_eins: "", spieler_zwei: "" });
//     setGewinner(g);
//     console.log("gewinner" + gewinner);
//     console.log(
//       " spieler_eins " +
//         state.spieler_eins +
//         " spieler_zwei " +
//         state.spieler_zwei
//     );
//   }
// };
//--------------------------------------------
// const saveToState = (e) => {
//   if (count === 0) {
//     setSpiel1(e.base_experience);
//     console.log("spiel1" + spiel1);
//     setSpiel2([]);
//     count += 1;
//     return;
//   }
//   if (count === 1) {
//     setSpiel2(e.base_experience);
//     console.log("spiel2" + spiel2);
//     let g = 0;
//     if (spiel1 > spiel2) {
//       g = spiel1;
//     } else {
//       g = spiel2;
//     }
//     count = 0;
//     setGewinner(g);
//     console.log("gewinner" + gewinner);
//   }
// };
