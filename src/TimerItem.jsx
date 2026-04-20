import React from "react";
import { useDispatch } from "react-redux";
import {
  startTimer,
  stopTimer,
  resetTimer,
} from "./features/timers/timersSlice";

const TimerItem = ({ timer }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "10px", border: "1px solid black", padding: "10px" }}>
      <h3>{timer.name}</h3>
      <p>{timer.elapsed}s</p>

      <button onClick={() => dispatch(startTimer(timer.id))}>
        Start
      </button>

      <button onClick={() => dispatch(stopTimer(timer.id))}>
        Stop
      </button>

      <button onClick={() => dispatch(resetTimer(timer.id))}>
        Reset
      </button>
    </div>
  );
};

export default TimerItem;