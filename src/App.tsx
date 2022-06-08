import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import Button from "./components/Button";
import Scoreboard from "./components/Scoreboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Connect four</h1>
      <Board />
      <Button />
      <Scoreboard />
    </div>
  );
};

export default App;
