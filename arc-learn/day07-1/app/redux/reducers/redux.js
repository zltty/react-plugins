import * as types from '../actionTypes';

import immutable from 'immutable';

const initState = immutable.fromJS({
  code: 0,
  isFetching: false,
  // result: immutable.fromJS({ value:'day06',message:'msg',code:0, }),
  message: null,
})

export default (state = initState, action) => {
  switch (action.type) {
    case types.REDUX_TEST_REQUEST:
      {
        // 方式一
        return state.merge({
          'isFetching': true
        })
        // // 方式二
        // return state.set('isFetching', true)
      }
    case types.REDUX_TEST_SUCCESS:
      {
        // 方式一
        return state.merge({
          'result': immutable.fromJS(action.result),
          'isFetching': false
        })
        // return state
        // .set('result', immutable.fromJS(action.result))
        // .set('isFetching', false)
      }
    case types.REDUX_TEST_FAILED:
      {
        // 方式一
        return state.merge({
          'result': immutable.fromJS(action.result),
          'isFetching': false
        })
        // // 方式二
        // return state
        // .set('result', immutable.fromJS(action.result))
        // .set('isFetching', false)
      }

    default:
      return state;
  }
}
