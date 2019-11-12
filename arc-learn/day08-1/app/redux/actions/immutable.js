import * as types from '../actionTypes';

export const immutableRequest = ()=> ({
  type:types.IMMUTABLE_TEST_REQUEST
})
export const immutableSuccess = ()=> ({
  type:types.IMMUTABLE_TEST_SUCCESS
})
export const immutableFailed = ()=> ({
  type:types.IMMUTABLE_TEST_FAILED
})