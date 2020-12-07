import React, { useState} from 'react';
import 'fdweb/normalize.css';
import 'fdweb/fluent.css';
import 'fdweb/fluent-icons.css';
import '../App.css';
import Alarm from './Alarm';

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="App">
      Digital Alarm Clock
  <h1 className="clock">{currentTime}</h1>
  <Alarm />
    </div>
  );
}

export default App;
