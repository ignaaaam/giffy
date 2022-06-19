import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/rick">Gifs de Rick</Link>
        <Link to="/gif/morty">Gifs de Morty</Link>
        <Link to="/gif/league-of-legends">Gifs de Lol</Link>
        <Route 
          path="/gif/:keyword" 
          component= {ListOfGifs} />
      </section>
    </div>
  );
}
