import { Reducer } from 'redux';
export interface ModelsState {
  [x: string]: any;
}
export interface ModelsReducers {
  [x: string]: (state: ModelsState, action: any) => void;
}
export type StateAction = (state, action) => ModelsState;

export default function getReducers(
  reducers: ModelsReducers,
  initState: ModelsState,
  namespace: string,
): Reducer {
  return (state: ModelsState = initState, action: any): ModelsState => {
    const path = action.type.match(/^(\S+\.reducer)\/(\S+)$/);
    if (path && path[1] === `${namespace}.reducers`) {
      const actor = reducers[path[2]](state, action);
      return (actor as unknown) as ModelsState;
    }
    return initState;
  };
}
