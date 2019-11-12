import React from 'react';

const routes = [
  {
    path: "/immutable",
    component: React.lazy(() => import('./Immutable'))
  },
];

export default routes;