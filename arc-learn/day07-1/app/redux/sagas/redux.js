import { put, takeLatest ,delay } from 'redux-saga/effects';
import { REDUX_TEST_REQUEST, REDUX_TEST_SUCCESS } from '../actionTypes';

function* redux() {
  yield delay(1500)
  yield put({
    type: REDUX_TEST_SUCCESS,
    result:{ value:'day06',message:'msg',code:0, }
  })
  console.log('你好! saga');
}

export default [
  takeLatest(REDUX_TEST_REQUEST,redux)
]