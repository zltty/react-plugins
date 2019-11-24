import { useEffect, useRef } from 'react';

const useUpdate: typeof useEffect = (effect, deps) => {
  const initLoad = useRef(true);

  useEffect(
    initLoad.current
      ? () => {
          // 初始化完成
          initLoad.current = false;
        }
      : effect,
    deps,
  );
};

export default useUpdate;
