import React from 'react';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import mitodLoading from '@mitod/mitod-loading';
import logger from 'redux-logger';
import { StoreContext, useDispatch, useMappedState } from 'redux-react-hook';
import createSagaMiddleware, { END } from 'redux-saga';
import { all } from 'redux-saga/effects';

import createReduersSaga, { Models } from './createReduersSaga';

interface ConfigProps {
  initialState?: object;
  models: Models[];
  dev: boolean;
  loading: string;
}
interface ConfigResult {
  ReduxProvider;
  useReduxReducer;
  useReduxMiddleware;
}

export default (config: ConfigProps): ConfigResult => {
  const middlewares: Middleware[] = [];
  const sagaMiddleware = createSagaMiddleware();
  const { initialState, models, dev = false, loading = 'loading' } = config;
  const addReducers = {};

  const injectStore = (): object => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(
      createStore,
    );

    // reducers
    const [reducers, sagas] = createReduersSaga(models);
    const rootReducer = combineReducers({
      ...reducers,
      ...addReducers,
    });
    // initialState
    const store = createStoreWithMiddleware(rootReducer, initialState);

    // exec
    sagaMiddleware.run(function*() {
      yield all(sagas);
    });
    Object.assign(store, { close: () => store.dispatch(END) });
    return store;
  };

  // methods
  const ReduxProvider = ({ children }): React.ReactNode => (
    <StoreContext.Provider value={injectStore()}>
      {children}
    </StoreContext.Provider>
  );
  /**
   * reducer middleware
   */
  const useReduxReducer = (reducerMiddleware, options = {}): void => {
    const { namespace, reducer, middleware } = reducerMiddleware(options);
    addReducers[namespace] = reducer;
    middlewares.push(middleware);
  };
  /**
   * redux middleware
   */
  const useReduxMiddleware = (middleware: Middleware): void => {
    middlewares.push(middleware);
  };

  useReduxReducer(mitodLoading, { name: loading });

  if (dev) {
    middlewares.push(logger);
  }

  return {
    ReduxProvider,
    useReduxReducer,
    useReduxMiddleware,
  };
};

export { useDispatch, useMappedState };
