import React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('./index'))
  },
];

export default routes;