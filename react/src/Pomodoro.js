import React, { useEffect, useState } from "react";
export default function Pomodoro() {
  const [time, setTime] = useState(10);
  const [timer, setTimer] = useState(null);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    console.log("indulok");
  }, []);

  useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
      <button
        onClick={() => {
          console.log("start");
          if (!timer) {
            let t = setInterval(() => {
              setTime((prevTimer) => {
                if (prevTimer <= 0) {
                  clearInterval(t);
                  setTimer(null);
                  setTime(20);
                }
                return prevTimer - 1;
              });
            }, 1000);
            setTimer(t);
          }
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          if (timer) {
            clearInterval(timer);
            setTimer(null);
            setReset(true);
          }
          if (reset) {
            setTime(20);
            setReset(false);
          }
        }}
      >
        {reset ? "Reset" : "Stop"}
      </button>
    </div>
  );
}
