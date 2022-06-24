import React, { useState, useEffect } from "react";
import "./styles/about.css";

const About = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (num < 65) {
        setNum((prevnum) => prevnum + 1);
      } else {
        clearInterval(interval);
      }
      console.log(`hello number is ${num}`);
    }, 35);
    return () => clearInterval(interval);
  }, [num]);

  return (
    <div id="circle-progress">
      <h2>About circular progress</h2>
      <div className="circle-progress">
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number">{num}%</div>
            </div>
          </div>
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              id="circle"
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
              style={{ "--rrr": 420 * (1 - 0.5) }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
