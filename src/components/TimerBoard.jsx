import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTimer } from "../features/timers/TimerSlice";
import TimerCard from "./TimerCard";

function TimerBoard() {
  const timers = useSelector((state) => state.timers);
  const dispatch = useDispatch();

  const handleAddTimer = () => {
    const label = prompt("Enter a timer label:")?.trim();
    dispatch(addTimer(label || "New Timer"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>All Timers ⏱️</h2>

      <button onClick={handleAddTimer}>
        + Add Timer
      </button>

      <div style={{ marginTop: 20 }}>
        {timers.map((timer) => (
          <TimerCard key={timer.id} timer={timer} />
        ))}
      </div>
    </div>
  );
}

export default TimerBoard;