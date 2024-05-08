import React, { useState, useEffect } from 'react';
import './Clock.css'; // Import CSS file for styling

const Clock = () => {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Digital Clock</h2>
      </div>
      <div className="timer">{time}</div>
    </div>
  );
};

export default Clock;
