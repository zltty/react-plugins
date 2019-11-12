import React from "react";
import { renderRoutes } from 'react-router-config';
import loadable from '@loadable/component';

import ErrorBoundary from './components/common/ErrorBoundary';
import Loading from './components/common/Loading';

const Router = loadable(() => import('./Router'),{
  fallback: <Loading />,
})

export default ()=> {
  return(
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  )
}