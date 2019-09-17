import { Reducer } from 'redux';

import { ModelReducers, ModelState } from './types';

export default function getReducers(
  reducers: ModelReducers,
  initState: ModelState,
  namespace: string,
): Reducer {
  return (state: ModelState = initState, action: any): ModelState => {
    const path = action.type.match(/^(\S+\.reducers)\/(\S+)$/);
    if (path && path[1] === `${namespace}.reducers`) {
      const actor = reducers[path[2]](state, action);
      return (actor as unknown) as ModelState;
    }
    return initState;
  };
}
