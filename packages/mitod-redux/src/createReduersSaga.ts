import { ReducersMapObject } from 'redux';
import { ForkEffect } from 'redux-saga/effects';

import getReducers, {
  ReducersAction,
  ReducersState,
  Reducers,
} from './getReducers';
import getSaga from './getSaga';

export interface Models {
  namespace: string;
  state: ReducersState;
  reducers: Reducers;
  effects?: any;
}
export { ReducersState, ReducersAction };

export default function createReduer(
  models: Models[],
): [ReducersMapObject<any, any>, ForkEffect[]] {
  const reducer: ReducersMapObject<any, any> = {};
  const sagas: ForkEffect[] = [];

  models.forEach(items => {
    reducer[items.namespace] = getReducers(
      items.reducers,
      items.state,
      items.namespace,
    );
    if (items.effects) {
      const saga = getSaga(items.effects, items.namespace);
      sagas.push(...saga);
    }
  });

  return [reducer, sagas];
}
