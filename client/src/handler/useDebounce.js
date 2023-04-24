/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";

const useDebounce = (func) => {
  const optimizedVersion = useCallback((...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, args);
    }, 500);
  }, []);

  let timer;

  const handleDebounce = useCallback(
    (...args) => {
      console.log("debounce func called", ...args);
      optimizedVersion(...args);
    },
    [optimizedVersion]
  );

  return [handleDebounce, optimizedVersion];
};

export default useDebounce;
