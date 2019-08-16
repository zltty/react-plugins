import { useState } from 'react';

import useInterval from './useInterval';

const defaultDelay = 1000;
const defaultCountTime = 30;

type CountDownType = [
  number,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

const useCountDown = (
  fn: Function,
  countTime = defaultCountTime,
): CountDownType => {
  const [start, setStart] = useState(false); // 开启倒计时
  const [countDown, setCountDown] = useState(countTime); // 倒计时

  useInterval(
    () => {
      if (countDown === 0) {
        setStart(false);
        fn();
      }
      setCountDown(countDown - 1);
    },
    start ? defaultDelay : null,
  );

  return [countDown, start, setStart];
};
export default useCountDown;
