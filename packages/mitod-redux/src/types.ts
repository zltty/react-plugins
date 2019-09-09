import { Action } from 'redux';
import { ActionMatchingPattern } from '@redux-saga/types';
import {
  SimpleEffect,
  ForkEffectDescriptor,
  ActionPattern,
  CallEffect,
  ForkEffect,
  PutEffect,
  TakeEffect,
} from 'redux-saga/effects';

export interface ModelState {
  [x: string]: any;
}

interface Payload {
  /**
   * action 参数传递
   */
  payload: any;
  [x: string]: any;
}

export interface ModelReducers {
  [x: string]: (state: ModelState, action: Payload) => void;
}
export type StateAction = (state, action) => ModelState;

export { Action } from 'redux';
export { ForkEffect };

export type GeneratorsType = SimpleEffect<'FORK', ForkEffectDescriptor>;

interface SagaEffect {
  put: <A extends Action>(action: A) => PutEffect<A>;
  take: (pattern?: ActionPattern) => TakeEffect;
  call: <Fn extends (...args: any[]) => any>(
    fn: Fn,
    ...args: Parameters<Fn>
  ) => CallEffect;
  delay<T = true>(ms: number, val?: T): CallEffect;
  debounce: <P extends ActionPattern>(
    ms: number,
    pattern: P,
    worker: (action: ActionMatchingPattern<P>) => any,
  ) => ForkEffect;
  throttle: <P extends ActionPattern>(
    ms: number,
    pattern: P,
    worker: (action: ActionMatchingPattern<P>) => any,
  ) => ForkEffect;
  /**
   * 当前 action type
   */
  currentActionType: any;
  [x: string]: any;
}

type Effects = (m: ModelState, s: SagaEffect) => any;

export interface SagaEffectGenerator {
  [x: string]: Effects;
}

export interface Model {
  namespace: string;
  state: ModelState;
  reducers: ModelReducers;
  effects?: SagaEffectGenerator;
}
