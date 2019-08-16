import { ReducersMapObject } from 'redux';
import { ForkEffect } from 'redux-saga/effects';

import getReducers, { ModelsState, ModelsReducers } from './getReducers';
import getSaga from './getSaga';

export interface Models {
  namespace: string;
  state: ModelsState;
  reducers: ModelsReducers;
  effects?: any;
}
export { ModelsState };

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
