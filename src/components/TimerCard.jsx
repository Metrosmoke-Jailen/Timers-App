import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  pauseTimer,
  resumeTimer,
  resetTimer,
  restartTimer,
  renameTimer,
} from "../features/timers/TimerSlice";
import { formatTime } from "../utils/formatTime";

const TimerCard = ({ timer }) => {
  const dispatch = useDispatch();

  const [displayTime, setDisplayTime] = useState(timer.elapsed);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(timer.label);

  useEffect(() => {
    let interval;

    if (timer.isRunning) {
      interval = setInterval(() => {
        setDisplayTime(timer.elapsed + (Date.now() - timer.startTime));
      }, 1000);
    } else {
      setDisplayTime(timer.elapsed);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="timer-card">

      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => {
            dispatch(renameTimer({ id: timer.id, label: text }));
            setIsEditing(false);
          }}
        />
      ) : (
        <h3 onDoubleClick={() => setIsEditing(true)}>
          {timer.label}
        </h3>
      )}

      <p>⏱️ {formatTime(displayTime)}</p>

      <p>Status: {timer.isRunning ? "🟢 Running" : "⏸️ Paused"}</p>

      <div>
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

        <button onClick={() => dispatch(restartTimer(timer.id))}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default TimerCard;