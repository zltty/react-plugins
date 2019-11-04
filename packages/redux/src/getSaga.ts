import { fork, put, takeEvery, takeLatest, cancel, take, call, delay, throttle, debounce, select, all } from 'redux-saga/effects';

import { SagaEffectGenerator, GeneratorsType, ForkEffect } from './types';

export default function getSaga(effects: SagaEffectGenerator, namespace: string): ForkEffect[] {
  const generators: GeneratorsType[] = [];

  Object.keys(effects).forEach(key => {
    const SagaPattern = `${namespace}.effects/${key}`;

    /**
     * 生成effects
     * @param params
     */
    function* sagaEffects(payload: any) {
      const watcher = function*() {
        yield put({ type: 'loading/@@show', actionType: `${namespace}/${key}` });
        yield effects[key](payload, {
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
          currentActionType: SagaPattern,
        });
        yield put({ type: 'loading/@@hide', actionType: `${namespace}/${key}` });
      };

      const task = yield fork(watcher);

      yield fork(function*() {
        yield take(SagaPattern + '@@cancel');
        yield put({ type: 'loading/@@hide', actionType: `${namespace}/${key}` });
        yield cancel(task);
      });
    }

    generators.push(takeLatest(SagaPattern, sagaEffects));
  });

  return generators;
}
