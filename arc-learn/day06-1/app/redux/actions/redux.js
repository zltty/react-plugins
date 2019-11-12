import * as types from '../actionTypes';

export const reduxRequest = ()=> ({
  type:types.REDUX_TEST_REQUEST
})
export const reduxSuccess = ()=> ({
  type:types.REDUX_TEST_SUCCESS
})
export const reduxFailed = ()=> ({
  type:types.REDUX_TEST_FAILED
})