import React, { useState, useEffect } from "react";
import "./AnalogClock.css";

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation angles for clock hands
  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = (((hours % 12) + minuteDeg / 360) / 12) * 360;

  const secondStyle = {
    transform: `rotate(${secondDeg}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minuteDeg}deg)`,
  };

  const hourStyle = {
    transform: `rotate(${hourDeg}deg)`,
  };

  return (
    <div className="analog-clock">
      <div className="clock-face">
        <div className="hand hour-hand" style={hourStyle}></div>
        <div className="hand minute-hand" style={minuteStyle}></div>
        <div className="hand second-hand" style={secondStyle}></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
}

export default AnalogClock;
