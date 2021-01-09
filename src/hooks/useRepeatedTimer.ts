import { useCallback, useEffect, useState } from 'react';

export const useRepeatedTimer = (initialSeconds: number, isTimerRunning: boolean) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const reset = useCallback(() => {
    setSeconds(initialSeconds);
  }, [setSeconds, initialSeconds]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((sec) => (sec === 0 ? 10 : sec - 1));
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }

      if (seconds === 0) {
        setSeconds(initialSeconds);
      }
    };
  }, [initialSeconds, isTimerRunning, seconds, setSeconds]);

  return {
    reset,
    seconds,
  };
};
