import Koa from 'koa';
import webpack from 'webpack';

import webpackConfig from '../webpack.config.client';
import webpackHotMiddleware from './middleware/webpack-dev/webpack-hot-middleware';
import webpackDevMiddleware from './middleware/webpack-dev/webpack-dev-middleware';

const app = new Koa();
const compiler = webpack(webpackConfig);

const wdm = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
});
const hot = webpackHotMiddleware(compiler);
app.use(wdm);
app.use(hot);

app.listen(process.env.PORT, process.env.HOST, err => {
  if (err) {
    throw err;
  }
  console.log(`Hot reload server is running with port ${process.env.PORT}`);
});
