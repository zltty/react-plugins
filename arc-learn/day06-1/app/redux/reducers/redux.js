import * as types from '../actionTypes';

import immutable from 'immutable';

const initState = {
  code: 0,
  isFetching:false,
  result: null,
  message: null,
  dateTime: null
}

export default (state = initState,action)=> {
  switch (action.type) {
    case types.REDUX_TEST_REQUEST:
      return {
        ...state,
        isFetching:true
      }
    case types.REDUX_TEST_SUCCESS: {
      const REQUEST_DATA = {
        code:0,
        message:'成功',
        data:[
          { name:'三哥' },
          { name:'五哥' },
          { name:'六哥' }
        ]
      }
      const data = immutable.fromJS(REQUEST_DATA);
      return {
        ...state,
        result: immutable.fromJS(REQUEST_DATA),
        isFetching:false,
        dateTime: Date.now()
      }
    }
    case types.REDUX_TEST_FAILED:{
      const REQUEST_DATA = {
        code:-1,
        message:'失败',
      }
      return {
        ...state,
        result: immutable.fromJS(REQUEST_DATA),
        isFetching:false,
        dateTime: Date.now()
      }
    }

    default:
      return state;
  }
}