const webpackDevMiddleware = require('webpack-dev-middleware');
const handleMiddleware = require('./handleMiddleware');

/**
 *
 * @param {object} compiler  webpack(webpackConfig)
 * @param {*} options webpack-dev-middleware 需要的特定选项
 * @return {function} (context, next)
 * context: koa 上下文
 * next: 是否调用下一个的中间件
 */
const express2koa = (compiler, options = {}) => {
  const { publicPath } = compiler.options.output;
  const defaults = options.publicPath ? options : { publicPath };
  // 配置
  const middleware = webpackDevMiddleware(compiler, Object.assign({}, defaults, options));

  return async (context, next) => {
    const contextTmp = context;
    // const locals = context.locals || context.state;
    const hasNext = await handleMiddleware(middleware, context.req, {
      send: content => {
        contextTmp.body = content;
      },
      // locals,
      setHeader() { contextTmp.set(...arguments); }
    });
    hasNext && await next();
  };
};
module.exports = express2koa;
