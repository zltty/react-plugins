import { ReducersMapObject } from 'redux';
import { all } from 'redux-saga/effects';
import getReducers, { IAction, IState, Reducers } from './getReducers';
import getSaga, { GeneratorsType, IEffect, IEffectGenerator } from './getSaga';

export interface Models {
  namespace: string;
  state: IState;
  reducers: Reducers;
  effects?: IEffectGenerator;
}
export { IState, IAction, IEffect };

export default function createReduer(models: Models[]) {
  const reducer: ReducersMapObject<any, any> = {};
  const sagas: GeneratorsType[] = [];

  const sagasGenerator = (sagas: GeneratorsType[]) => {
    return function*() {
      yield all(sagas);
    };
  };

  models.forEach((items) => {
    reducer[items.namespace] = getReducers(items.reducers, items.state, items.namespace);
    if (items.effects) {
      const saga = getSaga(items.effects, items.namespace);
      sagas.push(...saga);
    }
  });

  return [reducer, sagasGenerator(sagas)];
}
