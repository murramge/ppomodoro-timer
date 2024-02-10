import React, { useState } from "react";
import PomodoroTimerSettings from "./pomodoroTimerSetting";
function App() {
  const [initialtimer, setinitalTimer] = useState({
    focusetime: 20,
    shortbreak: 5,
    longbreak: 15,
    sections: 4,
  });

  return (
    <div className="App">
      <PomodoroTimerSettings
        initialtimer={initialtimer}
        setinitalTimer={setinitalTimer}
      />
    </div>
  );
}

export default App;
