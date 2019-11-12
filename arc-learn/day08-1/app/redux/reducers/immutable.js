import * as types from '../actionTypes';

import immutable from 'immutable';

const initState = immutable.fromJS({
  isFetching: false,
  retCode: 0, 
  retMsg:'msg',
  retData: null
})

export default (state = initState, action) => {
  switch (action.type) {
    case types.IMMUTABLE_TEST_REQUEST:
      {
        // 方式一
        return state.merge({
          'isFetching': true
        })
        // // 方式二
        // return state.set('isFetching', true)
      }
    case types.IMMUTABLE_TEST_SUCCESS:
      {
        // 方式一
        return state.merge(action.result)
        .set('isFetching',false);
        // return state
        // .set('result', immutable.fromJS(action.result))
        // .set('isFetching', false)
      }
    case types.IMMUTABLE_TEST_FAILED:
      {
        // 方式一
        return state.merge(action.result)
        .set('isFetching',false);
        // // 方式二
        // return state
        // .set('result', immutable.fromJS(action.result))
        // .set('isFetching', false)
      }

    default:
      return state;
  }
}
