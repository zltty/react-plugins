import { put, takeLatest ,delay } from 'redux-saga/effects';
import { HOME_TEST_REQUEST, HOME_TEST_SUCCESS } from '../actionTypes';

export function* homeSaga() {
  yield put({
    type: HOME_TEST_SUCCESS,
    result:{ 
      retCode: 0, 
      retMsg:'msg',
      retData: {
        code:0,
        msg:'msg',
        data:[
          { name:'张三',age:'10' },
          { name:'李四',age:'12' },
          { name:'王五',age:'11' },
        ],
      }
    }
  })
  console.log('你好! homeSaga');
}

export default [
  takeLatest(HOME_TEST_REQUEST,homeSaga)
]