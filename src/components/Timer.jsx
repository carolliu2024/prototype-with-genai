// src/components/Timer.js
import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState(5);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [seconds, setSeconds] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setSeconds(inputMinutes * 60 + inputSeconds);
  }, [inputMinutes, inputSeconds]);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else if (!isActive) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(inputMinutes * 60 + inputSeconds);
    setIsActive(false);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <div className="inputs">
        <input
          type="number"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(Number(e.target.value))}
          disabled={isActive}
        />
        <span>:</span>
        <input
          type="number"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(Number(e.target.value))}
          disabled={isActive}
        />
      </div>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={handleStartPause}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset} disabled={seconds === (inputMinutes * 60 + inputSeconds) && !isActive}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
