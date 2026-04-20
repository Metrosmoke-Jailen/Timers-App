import React from "react";
import { useDispatch } from "react-redux";
import {
  pauseTimer,
  resumeTimer,
  resetTimer
} from "../features/timers/TimerSlice";

const TimerCard = ({ timer }) => {
  const dispatch = useDispatch();

  const elapsedSeconds = Math.floor(timer.elapsed / 1000);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 12,
        marginBottom: 12,
        borderRadius: 8
      }}
    >
      <h3>{timer.label}</h3>

      <p>
        ⏱️ Elapsed: <strong>{elapsedSeconds}s</strong>
      </p>

      <p>
        Status: {timer.isRunning ? "🟢 Running" : "⏸️ Paused"}
      </p>

      {timer.isRunning ? (
        <button onClick={() => dispatch(pauseTimer(timer.id))}>
          Pause
        </button>
      ) : (
        <button onClick={() => dispatch(resumeTimer(timer.id))}>
          Resume
        </button>
      )}

      <button
        onClick={() => dispatch(resetTimer(timer.id))}
        style={{ marginLeft: 8 }}
      >
        Reset
      </button>
    </div>
  );
};

export default TimerCard;