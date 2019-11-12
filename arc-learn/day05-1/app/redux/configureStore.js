import { createStore, applyMiddleware, combineReducers } from 'redux';

import reducers from '../redux/reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') { 
  const logger = require('redux-logger').default;
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const initReducer = combineReducers(reducers)

const configureStore = (initialState)=> {
  const store = createStoreWithMiddleware(initReducer,initialState);
  
  return store;
}
export default configureStore;