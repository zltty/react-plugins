import React from 'react';
import { applyMiddleware, combineReducers, createStore, Middleware, ReducersMapObject } from 'redux';
import logger from 'redux-logger';
import { StoreContext, useDispatch, useMappedState } from 'redux-react-hook';
import createSagaMiddleware, { END, Saga } from 'redux-saga';

import createReduersSaga, { IAction, IEffect, IState, Models } from './createReduersSaga';

export { IState, IAction, IEffect };
interface IConstraintProps {
  initialState?: any;
  models: Models[];
}

type TErrorCallback = (e: Error) => void;
type TRNNRouter = (router: Map<string, (props?: any) => React.ReactNode>) => void;

interface IConstraintResult {
  useReduxReducer: (middleware: any) => void;
  useReduxMiddleware: (middleware: Middleware) => void;
  onError(fn: TErrorCallback): void;
  startRN(router: React.ReactNode): React.ReactNode; // react-navigation
  startRNN(router: TRNNRouter): void; // react-native-navigation
}

export default (config: IConstraintProps): IConstraintResult => {
  const middlewares: Middleware[] = [];
  const sagaMiddleware = createSagaMiddleware();
  const { initialState, models } = config;
  const addReducers: ReducersMapObject<any, any> = {};

  middlewares.push(sagaMiddleware);
  /* global __DEV__  */
  if (__DEV__) {
    middlewares.push(logger);
  }

  const injectStore = () => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

    // reducers
    const [reducers, sagas] = createReduersSaga(models);
    const rootReducer = combineReducers({
      ...reducers,
      ...addReducers
    });
    // initialState
    const store = createStoreWithMiddleware(rootReducer, initialState);

    // exec
    sagaMiddleware.run(sagas as Saga);
    Object.assign(store, { close: () => () => store.dispatch(END) });
    return store;
  };

  // methods
  const startRN = (Router: any): React.ReactNode => {
    const store = injectStore();
    return () => (
      <StoreContext.Provider value={store}>
        <Router />
      </StoreContext.Provider>
    );
  };
  const startRNN = () => {
    // TODO支持react-native-navigation
  };
  /**
   * reducer middleware
   */
  const useReduxReducer = (reducerMiddleware: any, options: any = {}) => {
    const {namespace, reducer, middleware}  = reducerMiddleware(options);
    addReducers[namespace] = reducer;
    middlewares.push(middleware);
  };
  /**
   * redux middleware
   */
  const useReduxMiddleware = (middleware: Middleware) => {
    middlewares.push(middleware);
  };
  const onError = () => {
    // TODO 捕获异常
    // setTimeout(() => {
    //   fn(new Error('times osss'));
    // }, 20000);
  };

  return {
    startRN,
    startRNN,
    useReduxReducer,
    useReduxMiddleware,
    onError
  };
};

export {
  useDispatch,
  useMappedState
};
