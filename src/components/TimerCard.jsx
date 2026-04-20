import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  pauseTimer,
  resumeTimer,
  resetTimer
} from "../features/timers/TimerSlice";
import { formatTime } from "../utils/formatTime";

const TimerCard = ({ timer }) => {
  const dispatch = useDispatch();
  const [displayTime, setDisplayTime] = useState(timer.elapsed);

  useEffect(() => {
    let interval;

    if (timer.isRunning) {
      interval = setInterval(() => {
        const now = Date.now();
        const liveElapsed =
          timer.elapsed + (now - timer.startTime);

        setDisplayTime(liveElapsed);
      }, 1000);
    } else {
      setDisplayTime(timer.elapsed);
    }

    return () => clearInterval(interval);
  }, [timer.isRunning, timer.startTime, timer.elapsed]);

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{timer.label}</h3>

      <p title={`${displayTime}ms`}>
        ⏱️ Elapsed Time: <strong>{formatTime(displayTime)}</strong>
      </p>

      <p>Status: {timer.isRunning ? "🟢 Running" : "⏸️ Paused"}</p>

      {timer.isRunning ? (
        <button onClick={() => dispatch(pauseTimer(timer.id))}>
          Pause
        </button>
      ) : (
        <button onClick={() => dispatch(resumeTimer(timer.id))}>
          Resume
        </button>
      )}

      <button onClick={() => dispatch(resetTimer(timer.id))}>
        Reset
      </button>
    </div>
  );
};

export default TimerCard;