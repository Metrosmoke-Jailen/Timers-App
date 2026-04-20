import { configureStore } from "@reduxjs/toolkit";
import timersReducer from "./features/timers/timersSlice";

const loadState = () => {
  try {
    const saved = localStorage.getItem("timers");
    return saved ? JSON.parse(saved) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  localStorage.setItem("timers", JSON.stringify(state));
};

export const store = configureStore({
  reducer: {
    timers: timersReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});