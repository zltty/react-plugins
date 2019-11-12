import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component'
import immutable from 'immutable';

import configureStore from './redux/configureStore';
import routes from './Router';
import App from './App';
import './index.css';
// import * as serviceWorker from '../serviceWorker';

const initState = window.__INITIAL_STATE__;

// 遍历initState 
for (const key in initState) {
  initState[key] = immutable.Map(initState[key])
}

const store = configureStore('web',initState);
const Root = ()=> {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
};

loadableReady(() => {
  ReactDOM.hydrate(<Root />, document.getElementById('root'));
});

