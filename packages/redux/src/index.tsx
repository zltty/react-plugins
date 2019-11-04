import React from 'react';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import mitodLoading from '@mitod/redux-loading';
import logger from 'redux-logger';
import { StoreContext, useDispatch, useMappedState } from 'redux-react-hook';
import createSagaMiddleware, { END } from 'redux-saga';
import { all } from 'redux-saga/effects';

import createReduersSaga from './createReduersSaga';
import { Model } from './types';

interface ConfigProps {
  /**
   * 初始化数据，可为空
   */
  initialState?: object;
  /**
   * modles 领域模型
   */
  models: Model[];
  /**
   * 开发环境
   */
  dev: boolean;
  /**
   * 全局loading 名称默认 loading
   */
  loading?: string;
}

const middlewares: Middleware[] = [];
const addReducers = {};

const Config = (config: ConfigProps) => {
  const {
    initialState = {},
    models,
    dev = false,
    loading = 'loading',
  } = config;
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // add loading
  const { namespace, reducer, middleware } = mitodLoading({
    name: loading,
  });
  addReducers[namespace] = reducer;
  middlewares.push(middleware);
  if (dev) {
    middlewares.push(logger);
  }

  // reducers
  const [modelsReducers, sagas] = createReduersSaga(models);
  const reducers = combineReducers({
    ...modelsReducers,
    ...addReducers,
  });
  // initialState
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );
  // exec
  sagaMiddleware.run(function*() {
    yield all(sagas);
  });

  Object.assign(store, { close: () => store.dispatch(END) });

  return store;
};

const Root = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { Config, Root, useDispatch, useMappedState };
export { Model };
export { default as useEffectsHelper } from './useEffectsHelper';
