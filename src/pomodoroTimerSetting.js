import React, { useState } from "react";
import "./pomodoroTimerSetting.css";

const PomodoroTimerSettings = ({ initialtimer, setinitalTimer }) => {
  const [focuseTimer, setFocuseTimer] = useState(initialtimer.focusetime);
  const [shortBreak, setShortBreak] = useState(initialtimer.shortbreak);
  const [sectionsTerms, setSectionsTerms] = useState(initialtimer.sections);

  const handleTimerSave = () => {
    setinitalTimer({
      focusetime: Number(focuseTimer),
      shortbreak: Number(shortBreak),
      sections: Number(sectionsTerms),
    });
  };
  return (
    <div className="setting">
      <div className="TimerSetting">
        <p>focus time</p>
        <select
          name="focusetimer"
          className="selectlist"
          onChange={(e) => setFocuseTimer(e.target.value)}>
          <option value={20}>20 min</option>
          <option value={25}>25 min</option>
          <option value={30}>30 min</option>
        </select>
      </div>
      <div className="TimerSetting">
        <p>break time</p>
        <select
          name="shortbreak"
          className="selectlist"
          onChange={(e) => setShortBreak(e.target.value)}>
          <option value={5}>5 min</option>
          <option value={10}>10 min</option>
          <option value={15}>15 min</option>
        </select>
      </div>
      <div className="TimerSetting">
        <p>term</p>
        <select
          name="sections"
          className="selectlist"
          defaultValue={4}
          onChange={(e) => setSectionsTerms(e.target.value)}>
          <option value={3}>3 term</option>
          <option value={4}>4 term</option>
          <option value={5}>5 term</option>
          <option value={6}>6 term</option>
        </select>
      </div>
      <button className="saveButton" onClick={handleTimerSave}>
        save
      </button>
    </div>
  );
};

export default PomodoroTimerSettings;
