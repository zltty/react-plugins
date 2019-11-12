import { renderRoutes } from 'react-router-config'

import HomeRouter from './pages/Home/router';
import ImmutableRouter from './pages/Immutable/router';
import AuthorizedRouter from './pages/Authorized/router';

const routes = [
  ...HomeRouter,
  ...ImmutableRouter,
  ...AuthorizedRouter,
];
const Router = ()=> renderRoutes(routes);

export default Router;
export {
  routes
}