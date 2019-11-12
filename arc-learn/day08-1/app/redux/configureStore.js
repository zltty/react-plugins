import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];
if (process.env.NODE_ENV === 'development') { 
  const logger = require('redux-logger').default;
  middlewares.push(logger);
}
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware)

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// 使用redux-immutable 中的combineReducers 而不是redux
const initReducer = combineReducers(reducers) 

const configureStore =  (target='web',initState={})=> {
  console.log(`initState--${target}-------->`,initState);
  const store = createStoreWithMiddleware(initReducer, immutable.Map(initState));
  
  store.close = () => store.dispatch(END);
  store.runSaga = sagaMiddleware.run; 
  
  target==='web' && sagaMiddleware.run(sagas);
  
  return store;
}
export default configureStore;