import { useEffect } from 'react';

const useLifecycles = (mount: React.EffectCallback, unmount?: () => void) => {
  useEffect(() => {
    if (mount) {
      mount();
    }
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export default useLifecycles;
