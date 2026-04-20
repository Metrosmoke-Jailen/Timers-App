export const loadState = () => {
  try {
    const saved = localStorage.getItem("timers");
    return saved ? JSON.parse(saved) : undefined;
  } catch (e) {
    console.error("Load error:", e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("timers", JSON.stringify(state));
  } catch (e) {
    console.error("Save error:", e);
  }
};