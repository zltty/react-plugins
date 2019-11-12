import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { routes } from './Router';

// ReactDOMServer does not yet support Suspense.
export default (store, url,context={}) => {
  return(
    <Provider store={store}> 
      <StaticRouter
        location={url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider> 
  )
}

export {
  routes,
}
