import { matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

// 只能匹配第一层路由
const matchTop = (routes, url) => routes.some(router => matchPath(url, {
  path: router.path,
  exact: router.exact,
}));

//匹配多层路由
const matchDeep = (routes, url) => matchRoutes(routes, url);

export {
  matchTop,
  matchDeep,
};