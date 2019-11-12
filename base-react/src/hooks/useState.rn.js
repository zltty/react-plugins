import React, { useReducer } from 'react';
import { Text, Button } from 'react-native';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state--------->', state);
  function add() {
    dispatch({ type: 'increment' });
  };
  function subtract() {
    dispatch({ type: 'decrement' });
  };

  return (
    <>
      <Text>
        {`Count:${state.count}`}
      </Text>
      <Button onPress={add} title="+" />
      <Button onPress={subtract} title="-" />
    </>
  );
}
export default Counter;
