import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 500) => {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handleDebounce);
    };
  }, [value, delay]);

  return debounceVal;
};

export default useDebounce;
