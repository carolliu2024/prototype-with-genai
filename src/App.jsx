// src/App.js
import React, { useState } from 'react';
import NameInput from './components/NameInput';
import Timer from './components/Timer';
import './App.css';

const App = () => {
  const [names, setNames] = useState([]);

  return (
    <div className="App">
      <Timer names={names} />
      <NameInput setNames={setNames} />
    </div>
  );
};

export default App;