import React, { useEffect, useState } from "react";

const PomodoroMain = ({ timerValue }) => {
  const [minutes, setMinutes] = useState(parseInt(timerValue.focusetime));
  const [seconds, setSeconds] = useState(parseInt(0));
  const [timerState, setTimerState] = useState(false);
  const [timerReset, setTimerReset] = useState(false);

  console.log(timerValue);
  const handleTimerStart = () => {
    setTimerReset(false);
    setTimerState(true);
  };
  const handleTimerStop = () => {
    setTimerReset(false);
    setTimerState(false);
  };
  const handleTimerReset = () => {
    setTimerReset(true);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timerReset) {
        clearInterval(countdown);
        setMinutes(parseInt(timerValue.focusetime));
        setSeconds(parseInt(0));
      } else {
        if (timerState) {
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
              clearInterval(countdown);
            } else {
              setMinutes(parseInt(minutes) - 1);
              setSeconds(59);
            }
          }
        } else {
          clearInterval(countdown);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, timerState, timerReset]);

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <button onClick={handleTimerStart}>start</button>
      <button onClick={handleTimerStop}>stop</button>
      <button onClick={handleTimerReset}>reset</button>
      <div>
        {minutes < 10 ? `0${minutes}` : { minutes }}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default PomodoroMain;
