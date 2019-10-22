import { useState,Dispatch } from 'react';

import useInterval from './useInterval';

const defaultDelay = 1000;
const defaultCountTime = 30;

type Result = [number, boolean, Dispatch<boolean>, Dispatch<number>];

const useCountDown = (
  fn: Function | undefined,
  countTime: number = defaultCountTime,
) => {
  const [isStart, setStart] = useState(false); // 开启倒计时
  const [countDown, setCountDown] = useState(countTime); // 倒计时

  useInterval(
    () => {
      if (countDown === 0) {
        setStart(false);
        fn && fn(setStart);
        return;
      }
      setCountDown(t => t - 1);
    },
    isStart ? defaultDelay : null,
  );

  return [countDown, isStart, setStart,setCountDown] as Result;
};

export default useCountDown;
