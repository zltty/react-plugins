import { Action } from 'redux';
import {
  fork,
  put,
  takeEvery,
  takeLatest,
  cancel,
  take,
  call,
  delay,
  throttle,
  debounce,
  select,
  all
} from 'redux-saga/effects';

import { SagaEffectGenerator, GeneratorsType, ForkEffect } from './types';

export default function getSaga(
  effects: SagaEffectGenerator,
  namespace: string,
): ForkEffect[] {
  const generators: GeneratorsType[] = [];

  Object.keys(effects).forEach(key => {
    const SagaPattern = `${namespace}.effects/${key}`;

    function* currentActionType(type: Action) {
      yield put({
        type,
        actionType: SagaPattern,
      });
    }

    /**
     * 生成effects
     * @param params
     */
    function* sagaEffects(params: any) {
      const watcher = function*() {
        yield effects[key](params, {
          fork,
          put,
          takeEvery,
          takeLatest,
          cancel,
          take,
          call,
          all,
          select,
          delay,
          debounce,
          throttle,
          currentActionType,
        });
      };
      const task = yield fork(watcher);
      yield fork(function*() {
        yield take(SagaPattern + '@@cancel');
        yield cancel(task);
      });
    }

    generators.push(takeLatest(SagaPattern, sagaEffects));
  });

  return generators;
}
