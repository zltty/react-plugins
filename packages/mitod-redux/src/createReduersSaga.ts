import { ReducersMapObject } from 'redux';
import { ForkEffect } from 'redux-saga/effects';

import { Model } from './types';
import getReducers from './getReducers';
import getSaga from './getSaga';

export default function createReduer(models: Model[]): [ReducersMapObject<any, any>, ForkEffect[]] {
  const reducer: ReducersMapObject<any, any> = {};
  const sagas: ForkEffect[] = [];

  models.forEach(items => {
    reducer[items.namespace] = getReducers(items.reducers, items.state, items.namespace);
    if (items.effects) {
      const saga = getSaga(items.effects, items.namespace);
      sagas.push(...saga);
    }
  });

  return [reducer, sagas];
}
