import loadable from '@loadable/component';

const routes = [
  {
    path: "/immutable",
    component: loadable(() => import('./index'))
  },
];

export default routes;