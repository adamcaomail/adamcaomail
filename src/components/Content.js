import React, { useState, useEffect } from "react";
import "./styles/content.css";
const Content = () => {
  const [conter, setConter] = useState(0);

  useEffect(() => {
    console.log(`conter is ${conter}`);
    const interval = setInterval(() => {
      if (conter < 65) {
        setConter((prevnum) => prevnum + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000 / 65);
    return () => clearInterval(interval);
  }, [conter]);
  return (
    <div>
      <h2>Content page</h2>
      <div className="container1">
        <div className="block1">
          <div className="box1">
            <p className="number">
              <span className="num">{conter}</span>
              <span className="sub">%</span>
            </p>
            <p className="title">completed</p>
          </div>
          <span
            className="dots1"
            style={{ "--rr": `${360 * (conter / 100)}deg` }}
          ></span>
          <svg className="svg1">
            <defs>
              <linearGradient id="gradientStyle">
                <stop offset="0%" stopColor="#373737" />
                <stop offset="100%" stopColor="#b7b" />
              </linearGradient>
            </defs>
            <circle
              className="circle1"
              cx="90"
              cy="90"
              r="80"
              style={{ "--clr": 503 - 503 * (conter / 100) }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Content;
