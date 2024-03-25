import { Button } from "@mui/material";
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
    <div className="flex gap-2 flex-col items-center">
      <h1>{time}</h1>
      <div className="flex flex-row gap-4">
      <Button variant="contained" color="success"
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
      </Button>
      <Button variant="outlined" color="error"
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
      </Button>
      </div>
    </div>
  );
}
