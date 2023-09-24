import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(new Date());

  useEffect(() => {
    const flash = setInterval(() => {
      setSeconds(new Date());
    }, 1000);

    return () => clearInterval(flash);
  }, []);
  const accTime = seconds.toLocaleString();
  return (
    <div>
      <div>Time: {accTime}</div>
    </div>
  );
}

export default Timer;
