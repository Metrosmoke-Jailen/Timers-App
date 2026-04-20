export function createTimer(label = "Untitled Timer", category = "General") {
  return {
    id: Date.now(),
    label,
    category,
    startTime: Date.now(),
    elapsed: 0,
    isRunning: true,
    countdownFrom: null,
  };
}