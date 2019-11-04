import { useCallback, useEffect } from 'react';
import { usePrevious } from '@mitod/rhooks';
import { useMappedState } from 'redux-react-hook';

/**
 *
 * @param fn
 * @param namespace models namespace
 * @param effectsMethod models effects 生成器方法
 * 
 * @returns [当前models state,loading]]
 */
const useEffectsHelper = (fn, namespace, effectsMethod) => {
  const mapstate = useMappedState(
    useCallback(
      state => ({
        [namespace]: state[namespace],
        loading: state.loading[`${namespace}/${effectsMethod}`],
      }),
      [effectsMethod, namespace],
    ),
  );
  const prevLoading = usePrevious(mapstate.loading);
  useEffect(() => {
    if (prevLoading && !mapstate.loading) {
      fn && fn(mapstate[namespace]);
    }
  }, [fn, mapstate, mapstate.loading, namespace, prevLoading]);

  return [mapstate[namespace], mapstate.loading];
};

export default useEffectsHelper;
