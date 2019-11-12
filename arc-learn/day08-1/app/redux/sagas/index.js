import { all } from 'redux-saga/effects';

import home from './home';
import immutable from './immutable';

export default function* (){
  yield all([
    ...home,
    ...immutable
  ])
} 