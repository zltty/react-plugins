import { Action, Reducer } from 'redux';
export interface IState {
  [x: string]: any;
}
export interface Reducers {
  [x: string]: (state: IState, action: Action) => void;
}
export interface IAction extends Action{
  payload?: any;
}

export default function getReducers(reducers: Reducers, initState: IState, namespace: string): Reducer {
  return (state: IState = initState, action: IAction) => {
    const path = action.type.match(/^(\S+\.reducer)\/(\S+)$/);
    if (path && (path[1] === `${namespace}.reducers`)) {
      const actor = reducers[path[2]];
      return actor(state, action);
    }
    return initState;
  };
}
