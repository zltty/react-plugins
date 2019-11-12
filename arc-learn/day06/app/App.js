import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';

import Loading from './components/common/Loading';
import ErrorBoundary from './components/common/ErrorBoundary';
import routes from './routes';

export default ()=> {
  return(
    <BrowserRouter>
      <ErrorBoundary>
        <React.Suspense fallback={<Loading />}>
          {renderRoutes(routes)}
        </React.Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}