import { useState } from 'react';

type Callback = () => void;

export const useDebounce = () => {
  const [timer, setTimer] = useState(0);

  const debouncer = (callback: Callback, delay: number) => {
    if (timer) {
      window.clearTimeout(timer);
    }

    const newTimer = window.setTimeout(() => {
      try {
        callback();
      } catch (e) {
        console.error('error', e);
      }
    }, delay);
    setTimer(newTimer);
  };

  return debouncer;
};
