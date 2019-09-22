import { useState } from 'react';

import useInterval from './useInterval';

const defaultDelay = 1000;
const defaultCountTime = 30;

type Result = [number, boolean, React.Dispatch<boolean>];

const useCountDown = (
  fn: (v: any) => void,
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

  return [countDown, isStart, setStart] as Result;
};

export default useCountDown;
