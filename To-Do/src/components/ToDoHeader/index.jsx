import React, { useState, useEffect } from 'react';
import './styles.css';

const ToDoHeader = () => {
  const [time, setTime] = useState(new Date());

  const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  const fullDate = new Date();
  const day = weekDays[fullDate.getDay()];
  const date = fullDate.getDate();
  const currentTime = time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="header-container">
      <h4>
        {day} {date}
      </h4>
      <p className="time">{currentTime} </p>
    </header>
  );
};

export default ToDoHeader;
