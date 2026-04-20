export function createTimer(label = "Untitled Timer") {
  const now = Date.now();

  return {
    id: now,
    label,
    startTime: now,
    elapsed: 0,
    isRunning: true,
  };
}