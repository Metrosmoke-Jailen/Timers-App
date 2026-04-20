import { createSlice } from "@reduxjs/toolkit";
import { createTimer } from "./createTimer";

const timersSlice = createSlice({
  name: "timers",
  initialState: [],
  reducers: {
    addTimer: (state, action) => {
      state.push(createTimer(action.payload));
    },

    pauseTimer: (state, action) => {
      const timer = state.find(t => t.id === action.payload);
      if (timer && timer.isRunning) {
        timer.elapsed += Date.now() - timer.startTime;
        timer.isRunning = false;
      }
    },

    resumeTimer: (state, action) => {
      const timer = state.find(t => t.id === action.payload);
      if (timer && !timer.isRunning) {
        timer.startTime = Date.now();
        timer.isRunning = true;
      }
    },

    resetTimer: (state, action) => {
      const timer = state.find(t => t.id === action.payload);
      if (timer) {
        timer.elapsed = 0;
        timer.startTime = Date.now();
        timer.isRunning = false;
      }
    },

    restartTimer: (state, action) => {
      const timer = state.find(t => t.id === action.payload);
      if (timer) {
        timer.elapsed = 0;
        timer.startTime = Date.now();
        timer.isRunning = true;
      }
    },

    renameTimer: (state, action) => {
      const { id, label } = action.payload;
      const timer = state.find(t => t.id === id);
      if (timer) {
        timer.label = label;
      }
    },

    loadTimers: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addTimer,
  pauseTimer,
  resumeTimer,
  resetTimer,
  restartTimer,
  renameTimer,
  loadTimers,
} = timersSlice.actions;

export default timersSlice.reducer;