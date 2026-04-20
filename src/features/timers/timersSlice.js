import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timers: [],
};

const timersSlice = createSlice({
  name: "timers",
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.timers.push({
        id: Date.now(),
        name: action.payload,
        elapsed: 0,
        running: false,
      });
    },

    startTimer: (state, action) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer) timer.running = true;
    },

    stopTimer: (state, action) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer) timer.running = false;
    },

    resetTimer: (state, action) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer) timer.elapsed = 0;
    },

    tick: (state) => {
      state.timers.forEach(timer => {
        if (timer.running) {
          timer.elapsed += 1;
        }
      });
    },
  },
});

export const {
  addTimer,
  startTimer,
  stopTimer,
  resetTimer,
  tick,
} = timersSlice.actions;

export default timersSlice.reducer;