import React, { useEffect, useState } from "react";

const PomodoroMain = ({ timerValue }) => {
  const [minutes, setMinutes] = useState(parseInt(timerValue.focusetime));
  const [seconds, setSeconds] = useState(parseInt(0));
  const [timerState, setTimerState] = useState(false);
  const [timerReset, setTimerReset] = useState(false);
  const [timerList, setTimerList] = useState("focus");
  const [pomodoroTerms, setPomodoroTerms] = useState(0);

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
              if (timerList == "focus") {
                if (pomodoroTerms < timerValue.sections) {
                  setPomodoroTerms(pomodoroTerms + 1);
                }
                setMinutes(parseInt(timerValue.shortbreak));
                setSeconds(parseInt(0));
                handleTimerStop();
                setTimerList("short");
              } else {
                setMinutes(parseInt(timerValue.focusetime));
                setSeconds(parseInt(0));
                handleTimerStop();
                setTimerList("focus");
              }
            } else {
              setMinutes(parseInt(minutes) - 1);
              setSeconds(59);
            }
          }
        } else {
          clearInterval(countdown);
        }
      }
    }, 100);
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
      <div>{pomodoroTerms}</div>
    </div>
  );
};

export default PomodoroMain;
