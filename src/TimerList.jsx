import React from "react";
import { useSelector } from "react-redux";
import TimerItem from "./TimerItem";

const TimerList = () => {
  const timers = useSelector((state) => state.timers.timers);

  return (
    <div>
      {timers.map((timer) => (
        <TimerItem key={timer.id} timer={timer} />
      ))}
    </div>
  );
};

export default TimerList;