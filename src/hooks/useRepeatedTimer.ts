import { useCallback, useEffect, useState } from 'react';

interface Options {
  onTimerEnd: () => void;
}

export const useRepeatedTimer = (
  initialSeconds: number,
  isTimerRunning: boolean,
  options: Options
) => {
  const { onTimerEnd } = options;

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
    };
  }, [initialSeconds, isTimerRunning, setSeconds]);

  useEffect(() => {
    if (seconds === 0) {
      onTimerEnd();
    }
  }, [onTimerEnd, seconds]);

  return {
    reset,
    seconds,
  };
};
