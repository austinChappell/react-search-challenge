import { useEffect, useState } from 'react';

export const useRepeatedTimer = (initialSeconds: number, onTimerEnd: () => void) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((sec) => (sec === 0 ? 10 : sec - 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setSeconds]);

  useEffect(() => {
    if (seconds === 0) {
      onTimerEnd();
    }
  }, [onTimerEnd, seconds]);

  return seconds;
};
