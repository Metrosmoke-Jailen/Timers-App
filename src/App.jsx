import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tick } from "./features/timers/timersSlice";
import TimerList from "./TimerList";
import AddTimer from "./AddTimer";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="app">
      <h1>⏱️ Timers App</h1>
      <AddTimer />
      <TimerList />
    </div>
  );
};

export default App;