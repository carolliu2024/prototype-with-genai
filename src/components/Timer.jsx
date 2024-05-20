// src/components/Timer.js
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Timer = ({ names }) => {
  const [inputMinutes, setInputMinutes] = useState(5);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [seconds, setSeconds] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const isWarningShown = useRef(false);

  useEffect(() => {
    setSeconds(inputMinutes * 60 + inputSeconds);
  }, [inputMinutes, inputSeconds]);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 120 && !isWarningShown.current) {
            toast.warning('Only 2 minutes left!');
            isWarningShown.current = true;
          }
          if (prevSeconds === 0) {
            clearInterval(timerRef.current);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
            return inputMinutes * 60 + inputSeconds;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else if (!isActive) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, inputMinutes, inputSeconds, names.length]);

  const handleStartPause = () => {
    setIsActive(!isActive);
    if (!isActive) {
      isWarningShown.current = false; // Reset warning flag when timer is started
    }
  };

  const handleReset = () => {
    setSeconds(inputMinutes * 60 + inputSeconds);
    setIsActive(false);
    isWarningShown.current = false; // Reset warning flag when timer is reset
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <ToastContainer />
      Set Time
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
      <div className="current-name">
        <h2>Current Turn: {names[currentIndex]}</h2>
      </div>
    </div>
  );
};

export default Timer;