import React, { useState } from "react";

function Inc_Dec() {
  const [Count, setCount] = useState(0);
  const increment = () => {
    if (Count < 10) {
      setCount(Count + 1);
    } else {
      alert("Not more than 10");
    }
  };
  const decrement = () => {
    if (Count > 0) {
      setCount(Count - 1);
    } else {
      alert("Cant be negative");
    }
  };
  return (
    <div
      style={{
        borderWidth: 1,
        border: "1px solid",
        padding: 10,
        borderColor: "black",
      }}
    >
      INC_DEC <br />
      {Count}
      <div>
        <button onClick={increment}>INC</button>
        <button onClick={decrement}>Dec</button>
      </div>
    </div>
  );
}

export default Inc_Dec;
