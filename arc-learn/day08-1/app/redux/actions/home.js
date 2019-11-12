import * as types from '../actionTypes';

export const homeRequest = ()=> ({
  type:types.HOME_TEST_REQUEST
})
export const homeSuccess = ()=> ({
  type:types.HOME_TEST_SUCCESS
})
export const homeFailed = ()=> ({
  type:types.HOME_TEST_FAILED
})