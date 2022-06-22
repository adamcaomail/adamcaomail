import React, { useState, useEffect } from "react";
import "./styles/welcome.css";

const Welcome = () => {
  const [localTime, setLocalTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setLocalTime(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h2>Welcome page</h2>
      <p>
        ref from youtube:
        <i>
          Amazing Working Digital Clock using Html CSS SVG & Javascript | Simple
          Javascript Project
        </i>
      </p>
      <div id="clock">
        <div id="time">
          <div className="circle" style={{ "--clr": "#ff2972" }}>
            <div
              className="dots hh_dot"
              style={{ "--tfrt": `${localTime.getHours() * 30}deg` }}
            ></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{ "--rt": 440 - (440 * localTime.getHours()) / 12 }}
              ></circle>
            </svg>
            <div id="hour">
              {localTime.getHours() >= 12
                ? localTime.getHours() - 12
                : localTime.getHours()}
              <br />
              <span>Hours</span>
            </div>
          </div>
          <div className="circle" style={{ "--clr": "#fee800" }}>
            <div
              className="dots mm_dot"
              style={{ "--tfrt": `${localTime.getMinutes() * 6}deg` }}
            ></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{ "--rt": 440 - (440 * localTime.getMinutes()) / 60 }}
              ></circle>
            </svg>
            <div id="minutes">
              {localTime.getMinutes() >= 10
                ? localTime.getMinutes()
                : "0" + localTime.getMinutes()}
              <br />
              <span>Minutes</span>
            </div>
          </div>
          <div className="circle" style={{ "--clr": "#04fc43" }}>
            <div
              className="dots ss_dot"
              style={{ "--tfrt": `${localTime.getSeconds() * 6}deg` }}
            ></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                id="ss"
                style={{ "--rt": 440 - (440 * localTime.getSeconds()) / 60 }}
              ></circle>
            </svg>
            <div id="seconds">
              {localTime.getSeconds() >= 10
                ? localTime.getSeconds()
                : "0" + localTime.getSeconds()}
              <br />
              <span>Seconds</span>
            </div>
          </div>
          <div className="ap">
            <div id="ampm">{localTime.getHours() >= 12 ? "PM" : "AM"}</div>
          </div>
        </div>
      </div>
      <p>{localTime.toString()}</p>
    </div>
  );
};

export default Welcome;
