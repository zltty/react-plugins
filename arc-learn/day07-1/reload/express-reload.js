import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack/webpack.config.client.dev';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.listen(process.env.PORT, process.env.HOST, err => {
  if (err) {
    throw err;
  }
  console.log(`Hot reload server is running with port ${process.env.PORT}`);
});
