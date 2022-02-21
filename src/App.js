import React from "react";
import ReactDOM from "react-dom";

import './App.css';
import WavesPanel from './components/WavesPanel'

function App() {
  return (
    <div className="App">
      <WavesPanel addresses={["lmaoded", "ass", "hole"]}/>
      <div className="wave-div">
        Click here to wave!<br />
        <button className="wave-button">Wave! 👋</button>
      </div>
    </div>
  );
}

export default App;
