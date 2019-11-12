import React from 'react';

const routes = [
  {
    path: "/reduxDemo",
    component: React.lazy(() => import('./ReduxDemo'))
  },
];

export default routes;