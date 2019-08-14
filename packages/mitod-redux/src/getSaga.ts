import { Action } from 'redux';
import * as ReduxSagaEffects from 'redux-saga/effects';

export interface IEffectGenerator {
  [x: string]: Function;
}
export type GeneratorsType = ReduxSagaEffects.SimpleEffect<'FORK', ReduxSagaEffects.ForkEffectDescriptor>;

export interface IEffect {
  put: ReduxSagaEffects.PutEffect;
  take: ReduxSagaEffects.TakeEffect;
  call: ReduxSagaEffects.CallEffect;
  delay<T = true>(ms: number, val?: T): ReduxSagaEffects.CallEffect;
  [x: string]: any;
}

export default function getSaga(effects: IEffectGenerator, namespace: string) {
  let generators: GeneratorsType[] = [];
  Object.keys(effects).forEach((key) => {
    const FLGA = `${namespace}.effects/${key}`;

    function* logType(type: Action) {
      yield ReduxSagaEffects.put({
        type,
        actionType : FLGA
      });
    }

    function* sagaEffects(params: any) {
      const watcher = function*() {
        yield effects[key](params, {...ReduxSagaEffects, logType});
      };
      const task = yield ReduxSagaEffects.fork(watcher);
      yield ReduxSagaEffects.fork(function*() {
        yield ReduxSagaEffects.take(FLGA + '@@cancel');
        yield ReduxSagaEffects.cancel(task);
      });
    }

    generators.push(ReduxSagaEffects.takeLatest(FLGA,  sagaEffects));
  });

  return generators;
}
