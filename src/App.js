import React from "react";
import "./App.css";
import Scroller from"./Components/Scroller.js"
import Board from "./Components/Board.jsx"

export default function App() {
  return (
    <div className="App">
      <Board />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Scroller/>
    </div>
  );
}
