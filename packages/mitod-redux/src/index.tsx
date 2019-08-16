import React from 'react';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import logger from 'redux-logger';
import { StoreContext, useDispatch, useMappedState } from 'redux-react-hook';
import createSagaMiddleware, { END } from 'redux-saga';
import { all } from 'redux-saga/effects';

import createReduersSaga, {
  ReducersAction,
  ReducersState,
  Models,
} from './createReduersSaga';

export { ReducersState, ReducersAction };

interface ConfigProps {
  initialState?: object;
  models: Models[];
  dev: boolean;
}

export default (config: ConfigProps): object => {
  const middlewares: Middleware[] = [];
  const sagaMiddleware = createSagaMiddleware();
  const { initialState, models, dev = false } = config;
  const addReducers = {};

  middlewares.push(sagaMiddleware);
  if (dev) {
    middlewares.push(logger);
  }

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

  return {
    ReduxProvider,
    useReduxReducer,
    useReduxMiddleware,
  };
};

export { useDispatch, useMappedState };
