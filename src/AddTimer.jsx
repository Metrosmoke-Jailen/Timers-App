import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTimer } from "./features/timers/timersSlice";

const AddTimer = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addTimer(name));
      setName("");
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Timer name"
      />
      <button onClick={handleAdd}>Add Timer</button>
    </div>
  );
};

export default AddTimer;