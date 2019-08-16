import { Action, Reducer } from 'redux';
export interface ReducersState {
  [x: string]: object;
}
export interface Reducers {
  [x: string]: (state: ReducersState, action: Action) => void;
}
export interface ReducersAction extends Action {
  payload?: object;
}
export type StateAction = (state, action) => ReducersState;

export default function getReducers(
  reducers: Reducers,
  initState: ReducersState,
  namespace: string,
): Reducer {
  return (
    state: ReducersState = initState,
    action: ReducersAction,
  ): ReducersState => {
    const path = action.type.match(/^(\S+\.reducer)\/(\S+)$/);
    if (path && path[1] === `${namespace}.reducers`) {
      const actor = reducers[path[2]](state, action);
      return (actor as unknown) as ReducersState;
    }
    return initState;
  };
}
