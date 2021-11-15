import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pokemon from "./components/routes/Pokemon";
import PokemonId from "./components/routes/PokemonId";
import PokemonInfo from "./components/routes/PokemonInfo";
import PokemonV2 from "./components/PokemonV2";
import PokemonV3 from "./components/PokemonV3";
import PokemonDetails from "./components/PokemonDetails";
import Logo from "./images/pikachu.jpg";
import Spiel from "./components/Spiel";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/pokemon")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img
            className="logo_img"
            src={Logo}
            alt="logo image"
            width="60"
            height="50"
          />
          PokeFight
        </div>
        <nav className="nav">
          <NavLink to="/" className="nav_link">
            Home{" "}
          </NavLink>
          <NavLink to="/pokemon" className="nav_link">
            Pokemon{" "}
          </NavLink>
          <NavLink to="/pokemon/" className="nav_link">
            PokemonId{" "}
          </NavLink>
          <NavLink to="/pokemon/" className="nav_link">
            PokemonInfo{" "}
          </NavLink>
          <NavLink to="/pokemonv2" className="nav_link">
            V2{" "}
          </NavLink>
          <NavLink to="/pokemonv3" className="nav_link">
            V3{" "}
          </NavLink>
        </nav>
        <a className="about" href="#">
          <NavLink to="/About">About </NavLink>
        </a>
      </header>

      <Navbar />
      {/* <Spiel /> */}
      <Switch>
        <Route exact path="/pokemon">
          <Pokemon data={articles} />
        </Route>
        <Route exact path="/pokemonv2">
          <PokemonV2 />
        </Route>
        <Route exact path="/pokemonv3">
          <PokemonV3 />
        </Route>
        <Route exact path="/pokemon_details/:slug">
          <PokemonDetails />
        </Route>
        <Route exact path="/pokemon/:id">
          <PokemonId data={articles} />
        </Route>
        <Route path="/pokemon/:id/:info">
          <PokemonInfo data={articles} />
        </Route>
        <Route path="/">
          <Home data={articles} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
