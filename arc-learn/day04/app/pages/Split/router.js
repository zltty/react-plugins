import DynamicImport from './DynamicImport';
import Loadable from './Loadable';
import Preloading from './Preloading';
import SyncImport from './SyncImport';
import ReactLazy from './ReactLazy';

const routes = [
  {
    path: "/dynamicImport",
    component: DynamicImport,
  },
  {
    path: "/loadable",
    component: Loadable,
  },
  {
    path: "/preloading",
    component: Preloading,
  },
  {
    path: "/syncImport",
    component: SyncImport,
  },
  {
    path: "/reactLazy",
    component: ReactLazy,
  },
];

export default routes;