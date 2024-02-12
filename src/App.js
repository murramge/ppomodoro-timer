import React, { useState } from "react";
import PomodoroTimerSettings from "./pomodoroTimerSetting";
import PomodoroMain from "./pomodoroMain";
import "./App.css";
function App() {
  const [initialtimer, setinitalTimer] = useState({
    focusetime: 20,
    shortbreak: 5,
    sections: 4,
  });

  return (
    <div className="App">
      <div className="pomodoroMainText">
        <p>Pomodoro Timer</p>
      </div>
      <div className="pomodoroTimerSet">
        <p>Timer Set</p>
      </div>
      <div className="pomodoroTimerSetList">
        <PomodoroTimerSettings
          initialtimer={initialtimer}
          setinitalTimer={setinitalTimer}
        />
      </div>
      <PomodoroMain timerValue={initialtimer} />
    </div>
  );
}

export default App;
