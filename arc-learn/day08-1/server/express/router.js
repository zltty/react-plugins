import { all } from 'redux-saga/effects';

import { matchDeep } from '../utils/match-route';
import { renderString } from '../utils/server-render';
import pathconfig from '../../config/path.config';
import configureStore ,{ runSaga } from '../../app/redux/configureStore';

export default function(app) {
  app.get('/api/v1/user/one', function(req, res) {
    const result = {
      code: 0,
      message: '成功1',
      value: '/api/v1/user/one'
    }
    res.send(result)
    // res.status(500)
  });

  app.get('*', async function(req, res) {
    const serverEntry = require(pathconfig.dist+'/ssr-server.js');
    const createApp = serverEntry.default;
    const routes = serverEntry.routes;
    
    const matchedRoutes = matchDeep(routes, req.path);
    const routesLen = matchedRoutes.length;
    const store = configureStore('node');

    // 处理404
    if ((routesLen === 0) || matchedRoutes[routesLen - 1].route.key === '404') {
      res.status(404);
      const Root = createApp(store,req.path);
      res.send(renderString(Root));
      return;
    }

    const sagas = [];
    matchedRoutes.forEach(item => {
      if (item.route.loadData) {
        sagas.push(item.route.loadData())
      }
    })
    
    try {
      console.time('saga耗时==============>');
      await store.runSaga(function*() {
        yield all(sagas);
      }).toPromise();
      console.timeEnd('saga耗时==============>');
      
      const context = {};
      const initState = store.getState();
      const Root = createApp(store, req.path, context);
      const html = renderString(Root, initState);
      // 301重定向
      context.action === 'REPLACE' ? res.redirect(301, context.url) : res.send(html);
    } catch (error) {
      console.warn('error.message--------->',error.message);
      console.warn('error.response--------->',error.response);
      if(!error.response){
        res.status(500)
        res.send('服务器内部异常');
        return;
      }
      const { status, statusText } = error.response;
      res.status(status)
      res.send(statusText);
    } finally {
      store.close();
    }
  });
}
