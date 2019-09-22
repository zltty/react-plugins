import { useState } from 'react';

import useInterval from './useInterval';

const defaultDelay = 1000;
const defaultCountTime = 30;

const useCountDown = (countTime: number= defaultCountTime) => {
  const [isStart, setStart] = useState(false); // 开启倒计时
  const [countDown, setCountDown] = useState(countTime); // 倒计时

  useInterval(() => setCountDown((t: number) => t - 1), isStart ? defaultDelay : null);

  return [countDown, isStart, setStart];
};


export default useCountDown;
