import React, { useState } from "react";
import PomodoroTimerSettings from "./pomodoroTimerSetting";
import PomodoroMain from "./pomodoroMain";
function App() {
  const [initialtimer, setinitalTimer] = useState({
    focusetime: 1,
    shortbreak: 2,
    longbreak: 15,
    sections: 4,
  });

  return (
    <div className="App">
      <PomodoroTimerSettings
        initialtimer={initialtimer}
        setinitalTimer={setinitalTimer}
      />
      <PomodoroMain timerValue={initialtimer} />
    </div>
  );
}

export default App;
