import { all } from 'redux-saga/effects';
import redux from './redux';

export default function* (){
  yield all([
    ...redux
  ])
} 