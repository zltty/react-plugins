import React from 'react';
import { applyMiddleware, combineReducers, createStore, Middleware, ReducersMapObject } from 'redux';
import logger from 'redux-logger';
import { StoreContext, useDispatch, useMappedState } from 'redux-react-hook';
import createSagaMiddleware, { END, Saga } from 'redux-saga';

import createReduersSaga, { IAction, IEffect, IState, Models } from './createReduersSaga';

export { IState, IAction, IEffect };
interface IConfigProps {
  initialState?: any;
  models: Models[];
  dev: boolean;
}

export default (config: IConfigProps) => {
  const middlewares: Middleware[] = [];
  const sagaMiddleware = createSagaMiddleware();
  const { initialState, models, dev = false } = config;
  const addReducers: ReducersMapObject<any, any> = {};

  middlewares.push(sagaMiddleware);
  if (dev) {
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
  const ReduxProvider = ({children}) => {
    return (
      <StoreContext.Provider value={injectStore()}>
        {children}
      </StoreContext.Provider>
    );
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

  return {
    ReduxProvider,
    useReduxReducer,
    useReduxMiddleware
  };
};

export {
  useDispatch,
  useMappedState
};
