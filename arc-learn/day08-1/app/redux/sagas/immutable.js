import { put, takeLatest ,delay } from 'redux-saga/effects';
import { IMMUTABLE_TEST_REQUEST, IMMUTABLE_TEST_SUCCESS } from '../actionTypes';

function* immutableSaga() {
  yield put({
    type: IMMUTABLE_TEST_SUCCESS,
    result:{ 
      retCode: 0, 
      retMsg:'msg',
      retData: {
        code:0,
        msg:'msg',
        data:'day06',
      }
    }
  })
  console.log('你好! immutableSaga');
}

export default [
  takeLatest(IMMUTABLE_TEST_REQUEST,immutableSaga)
]