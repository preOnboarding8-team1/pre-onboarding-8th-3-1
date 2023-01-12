import { useState } from 'react';

export const useDebounce = () => {
  const [timer, setTimer] = useState(0);

  const debouncer = (refetch, delay) => {
    if (timer) {
      window.clearTimeout(timer);
    }

    const newTimer = window.setTimeout(() => {
      try {
        refetch();
      } catch (e) {
        console.error('error', e);
      }
    }, delay);
    setTimer(newTimer);
  };

  return debouncer;
};
