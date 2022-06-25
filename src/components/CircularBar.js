import React, { useState, useEffect } from "react";
import "./styles/circularbar.css";
const CircularBar = () => {
  const [number, setNumber] = useState(80);
  const [conter, setConter] = useState(0);
  useEffect(() => {
    console.log(`conter is ${conter}`);
    const interval = setInterval(() => {
      if (conter < number) {
        setConter((prevnum) => prevnum + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [conter]);
  const handleClick = () => {
    setConter(number);
  };
  return (
    <div>
      <h2>Circular process Bar</h2>
      <input
        type="number"
        value={number}
        min={0}
        max={100}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick}>Do it</button>
      <div className="main2">
        <div className="container2">
          <div
            className="circular-progress2"
            style={{ "--aa": `${(360 * conter) / 100}deg` }}
          >
            <span className="progress-value2">{conter}%</span>
          </div>
          <span className="text2">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default CircularBar;
