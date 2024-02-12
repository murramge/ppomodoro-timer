import React, { useState } from "react";

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
    <>
      <select
        name="focusetimer"
        onChange={(e) => setFocuseTimer(e.target.value)}>
        <option value={20}>20 min</option>
        <option value={25}>25 min</option>
        <option value={30}>30 min</option>
      </select>
      <select name="shortbreak" onChange={(e) => setShortBreak(e.target.value)}>
        <option value={5}>5 min</option>
        <option value={10}>10 min</option>
        <option value={15}>35 min</option>
      </select>
      <select
        name="sections"
        defaultValue={4}
        onChange={(e) => setSectionsTerms(e.target.value)}>
        <option value={3}>3 term</option>
        <option value={4}>4 term</option>
        <option value={5}>5 term</option>
        <option value={6}>6 term</option>
      </select>

      <button onClick={handleTimerSave}>save</button>
    </>
  );
};

export default PomodoroTimerSettings;
