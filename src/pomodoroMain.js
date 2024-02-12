import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import "./pomodoroMain.css";
import playIcon from "./img/play.png";
import pauseIcon from "./img/pause.png";
import resetIcon from "./img/reset.png";
import focusSound from "./alarm/focus.mp3";
import breakSound from "./alarm/break.mp3";

const PomodoroMain = ({ timerValue }) => {
  const [minutes, setMinutes] = useState(parseInt(timerValue.focusetime));
  const [seconds, setSeconds] = useState(parseInt(0));
  const [timerState, setTimerState] = useState(false);
  const [timerReset, setTimerReset] = useState(false);
  const [timerList, setTimerList] = useState("focus");
  const [pomodoroTerms, setPomodoroTerms] = useState(0);
  const timeminute = parseInt(timerValue.focusetime);
  const [termArray, setTermArray] = useState(
    new Array(timerValue.sections).fill("○")
  );

  const [soundPlay] = useSound(focusSound);
  const [breakSoundPlay] = useSound(breakSound);

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
    setTimerList("focus");
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
    setSeconds(0);
    setTermArray(new Array(timerValue.sections).fill("○"));
  }, [timerValue]);

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
                soundPlay();
                if (pomodoroTerms < timerValue.sections) {
                  setPomodoroTerms(pomodoroTerms + 1);
                  termArray[pomodoroTerms] = "●";
                  setTermArray(termArray);
                }
                handleTimerList(parseInt(timerValue.shortbreak), "short");
              } else {
                breakSoundPlay();
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
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, timerState, timerReset, timerValue]);

  return (
    <div className="pomodoroMain">
      <div className="pomodoroTimer">
        <div className="pomodoroTimerText">
          <div className="pomodoroTimes">
            <p>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <div>
              <img
                src={playIcon}
                alt="play"
                width={20}
                height={20}
                onClick={handleTimerStart}></img>
              <img
                src={pauseIcon}
                width={20}
                height={20}
                onClick={handleTimerStop}></img>
              <img
                src={resetIcon}
                width={20}
                height={20}
                onClick={handleTimerReset}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="termList">
        {termArray.map((t) => (
          <span>{t}</span>
        ))}
      </div>
    </div>
  );
};

export default PomodoroMain;
