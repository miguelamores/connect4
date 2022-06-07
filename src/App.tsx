import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Connect four</h1>
      <Board />
      <Button />
    </div>
  );
};

export default App;
