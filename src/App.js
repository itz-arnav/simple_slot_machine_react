import React from 'react';
import SlotM from "./components/SlotM";
import {generate} from "./components/generate";
import refresh from "./components/refresh";
function App() {
  return (
    <div className="App">
      <h1 className="heading_style">🎰 Welcome to our <span className="heading_span">slot machine game</span> 🎰</h1>
      <div className="slotMachine">
        <SlotM 
          id = "1"
          gen = {generate}
        />
        <button className='btn-2' onClick={refresh}> Try Again </button>
      </div>
    </div>
  );
}

export default App;
