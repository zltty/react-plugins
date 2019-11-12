import React from 'react';

const routes = [
  {
    path: "/login",
    component: React.lazy(() => import('./Login'))
  },
];

export default routes;