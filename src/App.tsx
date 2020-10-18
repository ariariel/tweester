import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Positions from './Positions';
import PowerMeter from './PowerMeter';
import useKey from './hooks/useKey';

function App() {
  const { pressed, timeElapsed } = useKey(" ")
  const [powerReading, setPowerReading] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hold (space) and release to spin!
        </p>
      </header>
      {pressed}
      {timeElapsed}
      <PowerMeter active={pressed} onPowerReading={setPowerReading}/>
      <Positions spinIntensity={powerReading}/>
    </div>
  );
}

export default App;
