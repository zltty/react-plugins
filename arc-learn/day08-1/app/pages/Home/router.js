import loadable from '@loadable/component';
import { homeSaga } from '../../redux/sagas/home';

const Home = loadable(() => import('./index'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: homeSaga
  },
];

export default routes;