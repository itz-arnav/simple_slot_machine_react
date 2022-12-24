import React from 'react';
import SlotM from "./components/SlotM";
import {obj, generate} from "./components/generate";
function App() {
  return (
    <div className="App">
      <h1 className="heading_style">🎰 Welcome to our <span className="heading_span">slot machine game</span> 🎰</h1>
      <div className="slotMachine">
        <SlotM 
          obj = {obj}
          gen = {generate}
        />
      </div>
    </div>
  );
}

export default App;
