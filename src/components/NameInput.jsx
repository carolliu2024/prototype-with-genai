// src/components/NameInput.js
import React, { useState } from 'react';

const NameInput = ({ setNames }) => {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleAddName = () => {
    if (name.trim() !== '') {
      const newList = [...nameList, name.trim()];
      setNameList(newList);
      setNames(shuffleArray(newList));
      setName('');
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    setNameList(shuffledArray);
    return shuffledArray;
  };

  const handleShuffle = () => {
    setNames(shuffleArray([...nameList]));
  };

  return (
    <div className="name-input">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleAddName}>Add Name</button>
      <button onClick={handleShuffle}>Shuffle Names</button>
      <div className="name-list">
        <h3>Names List</h3>
        <ul>
          {nameList.map((n, index) => (
            <li key={index}>
              {index + 1}. {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NameInput;