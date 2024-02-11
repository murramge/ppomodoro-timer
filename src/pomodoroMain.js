import React, { useEffect, useState } from "react";

const PomodoroMain = ({ timerValue }) => {
  const [minutes, setMinutes] = useState(parseInt(timerValue.focusetime));
  const [seconds, setSeconds] = useState(parseInt(0));
  const [timerState, setTimerState] = useState(false);
  const [timerReset, setTimerReset] = useState(false);
  const [timerList, setTimerList] = useState("focus");
  const [pomodoroTerms, setPomodoroTerms] = useState(0);
  const timeminute = parseInt(timerValue.focusetime);

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
  const handleTimerList = (minutes, timerlist) => {
    handleTimerSet(minutes, 0);
    handleTimerStop();
    setTimerList(timerlist);
  };
  const handleTimerSet = (minutes, seconds) => {
    setMinutes(parseInt(minutes));
    setSeconds(parseInt(seconds));
  };

  useEffect(() => {
    setMinutes(timeminute);
  }, [timeminute]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timerReset) {
        clearInterval(countdown);
        handleTimerSet(timerValue.focusetime, 0);
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
                handleTimerList(parseInt(timerValue.shortbreak), "short");
              } else {
                handleTimerList(parseInt(timerValue.focusetime), "focus");
              }
            } else {
              handleTimerSet(parseInt(minutes) - 1, 59);
            }
          }
        } else {
          clearInterval(countdown);
        }
      }
    }, 100);
    return () => clearInterval(countdown);
  }, [minutes, seconds, timerState, timerReset, timerValue]);

  return (
    <div>
      <img
        src="./timer.png"
        width={20}
        height={20}
        onClick={(e) => console.log(e)}></img>
      <h1>Pomodoro Timer</h1>
      <button onClick={handleTimerStart}>start</button>
      <button onClick={handleTimerStop}>stop</button>
      <button onClick={handleTimerReset}>reset</button>
      <div>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div>{pomodoroTerms}</div>
    </div>
  );
};

export default PomodoroMain;
