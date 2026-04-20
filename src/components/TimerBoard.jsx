import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTimer } from "../features/timers/TimerSlice";
import TimerCard from "./TimerCard";

function TimerBoard() {
  const rawTimers = useSelector((state) => state.timers);
  const timers = Array.isArray(rawTimers) ? rawTimers : [];
  const dispatch = useDispatch();

  const handleAddTimer = () => {
    const label = prompt("Enter timer name:")?.trim();
    dispatch(addTimer(label || "New Timer"));
  };

  return (
    <div className="timer-board">
      <h2>All Timers ⏱️</h2>

      <button onClick={handleAddTimer}>+ Add Timer</button>

      <div style={{ marginTop: 20 }}>
        {timers.map((timer) => (
          <TimerCard key={timer.id} timer={timer} />
        ))}
      </div>
    </div>
  );
}

export default TimerBoard;