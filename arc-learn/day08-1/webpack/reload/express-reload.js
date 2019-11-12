import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack.config.client.dev';

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.listen(PORT, '127.0.0.1', err => {
  if (err) {
    throw err;
  }
  console.log(`Hot reload server is running with port ${PORT}`);
});
