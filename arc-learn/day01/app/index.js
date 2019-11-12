import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import * as serviceWorker from '../serviceWorker';
import App from './pages/App';

let Root = App;
if(process.env.NODE_ENV === 'development'){
  const { hot } = require('react-hot-loader');
  Root = hot(module)(Root);
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
