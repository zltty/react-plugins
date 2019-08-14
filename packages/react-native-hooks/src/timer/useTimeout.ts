import { useEffect } from 'react';

const useTimeout = (fn: Function, ms = 0) => {
  useEffect(() => {
    const timer = setTimeout(fn, ms);
    return () => {
      clearTimeout(timer);
    };
  }, [fn, ms]);
};

export default useTimeout;
